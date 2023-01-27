import * as corelog from "@tokio-js/corelog";
import { Tokio } from "../tokio";
import * as flags from "./flags";
import { BUS } from "./events";

export function _(){}


function check_lazy_load() {
    let globvar = globalThis["LAZY_LOAD_TOKIO"];
    if(typeof globvar === "boolean") {
        Config.LAZY_LOAD = globvar;
        return;
    }
    Config.LAZY_LOAD = false;
}

BUS.on("TOKIO.PreInitEvent", () => {
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
                L._trace$("\"TOKIO_INTERNALS\" flag recieved: enabling unsafe, internal features");
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
                corelog.setStatus(false);
            } else {
                corelog.setStatus(true);
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
});

BUS.on("TOKIO.PreInitEvent", () => {
    flags.subscribe({
        id: "TOKIO_INTERNAL_INIT",
        enabled: false,
        updateValue(v) {
            const { L } = require("../log/log");
            if(!Config.INTERNALS && !Config.LAZY_LOAD) {
                return L._error$("Internals are not enabled");
            }
            if(typeof v === "function") {
                v()
            } else {
                L._error$("Expected Function found: " + typeof v )
            }
        },
        onEnable(){},
    });
    flags.subscribe({
        id: "TOKIO_BIN",
        enabled: false,
        updateValue(v) {
            const { L } = require("../log/log");
            if(!Config.INTERNALS && !Config.LAZY_LOAD) return L._error$("Internals are not enabled");
            if(v===true) {
                Config.BIN_UTILS = true;
            } else {
                Config.BIN_UTILS = false;
            }
        },
        onEnable(){},
    });
    flags.subscribe({
        id: "TOKIO_EXPORT_BUS",
        enabled: false,
        updateValue(v) {
            const { L } = require("../log/log");
            if(!Config.INTERNALS && !Config.LAZY_LOAD) return L._error$("Internals are not enabled");
            if(v===true) {
                Config.EXPORT_BUS = true;
            } else {
                Config.EXPORT_BUS = false;
            }
        },
        onEnable(){},
    });
    flags.register();
});

BUS.on("TOKIO.PostInitEvent", () => {
    Object.defineProperty(Tokio.EXPORTABLES, "CONFIG", {
        get() {
            if(Config.INTERNALS) {
                return Config;
            } else {
                return undefined;
            }
        },
    });
    Object.defineProperty(Tokio.EXPORTABLES, "BUS", {
        get() {
            if(Config.INTERNALS) {
                return BUS;
            } else {
                return undefined;
            }
        },
    });
});

export namespace Config {
    export let BIN_UTILS: boolean = false;
    export let INTERNALS: boolean = false;
    export let LAZY_LOAD: boolean = false;
    export let EXPORT_BUS: boolean = false;
}
