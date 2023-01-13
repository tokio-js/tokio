use::{
    node_bindgen::derive::node_bindgen,
    std::{
        time::{
            SystemTime,
            UNIX_EPOCH
        },
        io::{
            Write,
            self
        },
        fs::{
            File,
            self
        }
    }
};


const CORE_START: &str =
r#"|------------------------------------CORELOG START-------------------------------------
|          Time           | Lvl |                         File And Message"#;
const TOP_START: &str =
r#"|------------------------------------CORELOG START-------------------------------------
|          Time           | Lvl |                         File And Message"#;



#[doc(hidden)]
const DEBUG: bool = false;



struct CoreLog {
    topfile: Option<File>,
    latest: Option<File>,
    file: Option<File>
}
#[node_bindgen]
impl CoreLog {
    /// Contructor
    #[node_bindgen(constructor)]
    pub fn new() -> Self {
        let time = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap()
            .as_millis();

        match fs::read_dir("corelogs") {
            Ok(_) => CoreLog::success(&time),
            Err(_) => {
                match create_dir() {
                    Ok(_) => CoreLog::success(&time),
                    Err(_) => {
                        println!("CORELOG ERROR: Failed to create logs directory");
                        CoreLog::void()
                    }
                }
            }
        }
    }

    fn void() -> Self { Self { topfile: None, latest: None, file: None } }

    fn success(time: &u128) -> Self {
        let topfile = create_file(format!("corelogs/LOG-{}.log",time),CORE_START);
        let latest = create_file("corelogs/latest.log",CORE_START);
        let file = create_file(format!("corelogs/CORELOG-{}.log",time),TOP_START);
        Self { topfile, latest, file }
    }

    /// Logs to topfile
    #[node_bindgen]
    pub fn toplog(&mut self, msg: String){
        match &mut self.topfile {
            Some(f) => {
                log_message(f, &msg);
            },
            None => {}
        };
    }

    /// Logs to corefile
    #[node_bindgen]
    pub fn corelog(&mut self, msg: String){
        match &mut self.file {
            Some(f) => {
                log_message(f, &msg);
            },
            None => {}
        };
        match &mut self.latest {
            Some(f) => {
                log_message(f, &msg);
            },
            None => {}
        };
    }
}

fn log_message<T: ToString>(file: &mut File, msg: T){
    let res = file.write_all(format!("{}\n",msg.to_string()).as_bytes());
    if DEBUG {
        println!("write: {:?}",res);
    }
}

fn create_file<T: ToString>(name: T, msg: &'static str) -> Option<File> {
    let mut file = match File::create(name.to_string()) {
        Ok(v) => v,
        Err(_) => { return None; }
    };
    log_message(&mut file, msg.to_string());
    Some(file)
}
fn create_dir() -> io::Result<()> {
    fs::create_dir("corelogs")
}