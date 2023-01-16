import tokiojs from "./src/lib";
tokiojs.FLAGS["TOKIO_INTERNALS"] = true;
const { app, L, M, OOP } = tokiojs.load();

app.main = (args: string[]) => {
    L._error$("Error Message")
    L._warn$("Warn Messagee")
    L._info$("Info Message")
    L._debug$("Debug Message")
    L._trace$("Trace Message")
}


app.run();

