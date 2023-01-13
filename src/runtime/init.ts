import { Config, preinit } from "./preinit";
import * as flags from "./flags";


export function init() {
    preinit();
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
    flags.register();
}
