const tokiojs = require('../../src/lib');
tokiojs.FLAGS["TOKIO_INTERNALS"] = true;
tokiojs.FLAGS["TOKIO_BIN"] = true;

const raw_metadata = {
    env: process.env,
    argv: process.argv,
    current_working_directory: process.cwd(),

}

tokiojs.FLAGS["TOKIO_INTERNAL_INIT"] = () => {
    
};
const tokio = tokiojs.load();
const { app, L, M, OOP } = tokio;

tokio["DEV"].BIN.init();

app.main = async () => {

};

app.run();