const tokiojs = require('../.turbo/build/lib');
tokiojs.FLAGS["TOKIO_INTERNALS"] = true;
tokiojs.FLAGS["TOKIO_BIN"] = false;
const METADATA = {
    env: process.env,
    argv: process.argv.slice(2),
    raw_args: process.argv,
    current_working_directory: process.cwd(),

}
const tokio = tokiojs.load("OLDCONSOLE");
const { app } = tokio;


const COMMANDS = {
    /**
     * @param {string[]} args
    */
    "scaffold": (args) => {
        console.log("Scaffolding...");
    },
    "help": () => {
        console.log("Help...");
    }
}


/**
 * 
 * @param {string[]} argv 
 */
function parser(argv) {
    const command = argv[0].toLowerCase();
    const args = argv.slice(1);
    
    switch(command){
        case "scaffold": COMMANDS.scaffold(args); break;
        default: COMMANDS.help(); break;
    }
}




app.main = () => {
    if(METADATA.argv.length != 0){
        parser(METADATA.argv);
    } else {
        COMMANDS.help();
    }
};

app.run();