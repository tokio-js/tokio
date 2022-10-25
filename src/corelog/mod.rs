use::{
    node_bindgen::derive::node_bindgen,
    std::{
        time::{
            SystemTime,
            UNIX_EPOCH
        },
        io::Write,
        fs::{
            File,
            self
        }
    }
};




#[doc(hidden)]
const DEBUG: bool = false;



struct CoreLog {
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
            Ok(_) => {
                let preres: Option<File> = match File::create("corelogs/latest.log") {
                    Ok(mut f) => {
                        __log_msg(&mut f, &String::from("----------CORELOG START----------"));
                        Some(f)
                    },
                    Err(_) => None
                };
                match File::create(format!("corelogs/CORELOG-{}.log",time)) {
                    Ok(mut f) => {
                        __log_msg(&mut f, &String::from("----------CORELOG START----------"));
                        Self {
                            latest: preres,
                            file: Some(f)
                        } 
                    },
                    Err(_) => {
                        Self {
                            latest: preres,
                            file: None
                        }
                    }
                }
            },
            Err(_) => {
                match fs::create_dir("corelogs") {
                    Ok(_) => {
                        let preres: Option<File> = match File::create("corelogs/latest.log") {
                            Ok(mut f) => {
                                __log_msg(&mut f, &String::from("----------CORELOG START----------"));
                                Some(f)
                            },
                            Err(_) => None
                        };                
                        match File::create(format!("corelogs/CORELOG-{}.log",time)) {
                            Ok(mut f) => {
                                __log_msg(&mut f, &String::from("----------CORELOG START----------"));
                                Self {
                                    latest: preres,
                                    file: Some(f)
                                } 
                            },
                            Err(_) => {
                                Self {
                                    latest: preres,
                                    file: None
                                }
                            }
                        }
                    },
                    Err(_) => {
                        println!("CORELOG ERROR: Failed to create logs directory");
                        Self {
                            latest: None,
                            file: None
                        }
                    }
                }
            }
        }
    }

    /// Logs to file
    #[node_bindgen]
    pub fn log(&mut self, msg: String){
        match &mut self.file {
            Some(f) => {
                __log_msg(f, &msg);
            },
            None => {}
        };
        match &mut self.latest {
            Some(f) => {
                __log_msg(f, &msg);
            },
            None => {}
        };
    }
}

fn __log_msg(file: &mut File, msg: &String){
    let res = file.write_all(format!("{}\n",msg).as_bytes());
    if DEBUG {
        println!("write: {:?}",res);
    }
}
