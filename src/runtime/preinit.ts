import * as flags from "./flags";
import * as bin from "../bin";


function check_lazy_load() {
    let globvar = globalThis["LAZY_LOAD_TOKIO"];
    if(typeof globvar === "boolean") {
        Config.LAZY_LOAD = globvar;
        return;
    }
    Config.LAZY_LOAD = false;
}


export function preinit() {
    check_lazy_load();
    flags.subscribe({
        id: "TOKIO_INTERNALS",
        enabled: false,
        updateValue: (v) => {
            if(typeof v != "boolean" || v === false) {
                Config.INTERNALS = false;
            } else {
                Config.INTERNALS = true;
            }
        },
        onEnable: () => {
            if(!Config.LAZY_LOAD) {
                const { L } = require("../log/log");
                L._setLogLevel$("Trace")
                L._warn$("\"TOKIO_INTERNALS\" flag recieved: enabling unsafe, internal features");
            }
        },
    });
    flags.register();
    flags.subscribe({
        id: "TOKIO_BINLOADER",
        enabled: true,
        updateValue: (v) => {
            if(!Config.INTERNALS && !Config.LAZY_LOAD){
                const { L } = require("../log/log");
                return L._error$("Internals are not enabled");
            }
            if(typeof v == "boolean" && v == false) {
                bin.set(false);
            } else {
                bin.set(true);
            }
        },
        onEnable: () => {
            if(!Config.LAZY_LOAD) {
                const { L } = require("../log/log");
                L._setLogLevel$("Trace")
                L._warn$("\"TOKIO_INTERNALS\" flag recieved: enabling unsafe, internal features");
            }
        }
    });
    flags.register();
}

export namespace Config {
    export let BIN_UTILS: boolean = false;
    export let INTERNALS: boolean = false;
    export let LAZY_LOAD: boolean = false;
}
