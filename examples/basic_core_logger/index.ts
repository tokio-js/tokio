import tokiojs from "../../src/lib";
const { L } = tokiojs.load();
const {_debug$,_error$,_info$,_trace$,_warn$} = L;

// Sets the log level, defaults to "Info"
L._setLogLevel$("Warn")


_error$("Some random Error Message"); // will be visible in console and file
_warn$("Some random Warning Message");// will be visible in console and file
_info$("Some random Info Message");   // will be visible only in file
_debug$("Some random Debug Message"); // will be visible only in file
_trace$("Some random Trace Message"); // will be visible only in file