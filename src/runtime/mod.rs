use node_bindgen::derive::node_bindgen;
use std::thread;

#[node_bindgen]
fn thread<F: Fn(i32) + std::marker::Send + std::marker::Sync + 'static >(name: String, cb: F) {
    const ID: i32 = 1;
    let handle = thread::Builder::new().name(name).spawn(move || {
        cb(ID);
    });
    match handle {
        Ok(v) => {
            match v.join() {
                Ok(_) => {

                },
                Err(e) => println!("Error: {:?}", e),
            }
        },
        Err(e) => println!("Error: {:?}", e),
    }
    // return;
}