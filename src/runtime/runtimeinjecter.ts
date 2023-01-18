import { PostInitEvent } from "../events/PostInit.event";
import { InitEvent } from "../events/Init.event";
import { TokioType } from "../types/tokio";
import { BUS } from "./events";


let USEINJECT: boolean = true;
let NOCONSOLEINJECT: boolean = false;
let TURBO_CORELOGS: boolean = true;


export function runtimeInjector(inject?: string[]): typeof TokioType {
    if(!inject) inject = [];
    BUS.post(new InitEvent());
    const corelog = require("corelog");
    const { __INTERNALS } = require("../log/logger");
    const macros = require("../macros/macros");
    const runtime = require("./runtime");
    const jsutil = require("util");
    const { Config } = require("./preinit");

    const { L } = require("../log/log");
    const { OOP } = require("../oop/oop");
    var Tokio: typeof TokioType = {
        L: L,
        M: macros.M,
        app: undefined,
        OOP: OOP,
    };
    if(inject.includes("NOTURBOCORELOGS"))TURBO_CORELOGS=false;
    if(inject.includes("NOAUTOINIT")) {
        console.warn('"NOAUTOINIT" feature is enabled, manual injection is required');
        USEINJECT = false;
    } else {
        if(TURBO_CORELOGS) {
            corelog.init();
        } else {
            corelog.init("corelogs");
        }
        L._setLogLevel$("Debug")
        if(corelog.getStatus()) {
            L._trace$("CORELOG Loaded");
        } else {
            L._trace$("CORELOG not loaded");
        }
    }
    L._trace$("injecting runtime");
    Object.defineProperty(Tokio,"DEV",{
        get() {
            if(Config.INTERNALS) {
                L._trace$("Internals enabled, exporting Developer Specific Features");
                return {
                    __internals__: true, 
                    bus: (()=>{
                        if(Config.EXPORT_BUS) {
                            return BUS;
                        } else {
                            return {};
                        }
                    })()
                };
            } else {
                L._error$("Internals are not enabled");
                return {}
            }
        },
    });
    if(inject.includes("NOINJECT")) {
        L._trace$('"NOINJECT" feature is enabled, manual injection is required');
        USEINJECT = false;
    }
    if(inject.includes("NOCONSOLE")) {
        L._trace$("Not injecting anything into the console")
        NOCONSOLEINJECT = true;
    }
    if(inject.includes("OLDCONSOLE")) {
        if(!NOCONSOLEINJECT) {
            console.log = function(...args: any[]) {
                let pre = jsutil.formatWithOptions({
                    colors: false,
                    compact: false,
                    showHidden: true,
                    sorted: true,
                    showProxy: true,
                    
                },...args)
                pre = pre.replace(/\n/g,"\n|                         |     |  ")
                L._trace$("Logged Message: " + pre);
                console.warn(...args);
            }
            L._trace$("Using old Console")
        }
    } else {
        if(!NOCONSOLEINJECT) {
            console.log = function(...args: any) {
                __INTERNALS._CORELOG_ENABLED = false;
                let logged = jsutil.formatWithOptions({
                    colors: true,
                    compact: true,
                    showHidden: false,
                    sorted: true,
                    showProxy: false
                },...args);
                let coreloged = jsutil.formatWithOptions({
                    colors: false,
                    compact: false,
                    showHidden: true,
                    sorted: true,
                    showProxy: true
                },...args);
                L._info$(logged);
                __INTERNALS._CORELOG_ENABLED = true;
                __INTERNALS.unsafeLog(coreloged);
            }
        }
    }
    if(USEINJECT) {
        Object.defineProperty(globalThis, "__tokio_internal_$Injecter", {
            value: () => {
                Object.defineProperty(globalThis, "M", {
                    value: macros.M
                });
                Object.defineProperty(globalThis, "OOP", {
                    value: OOP
                });
                Object.defineProperty(globalThis, "L", {
                    value: Tokio.L
                });
                Object.defineProperty(globalThis, "_main$", {
                    set(func: any) {
                        if(typeof func === typeof Function) {
                            runtime.runner(func).run();
                        } else {
                            runtime.runner(() => { console.log("Hello World") }).run();
                        }
                    },
                    get(): void {
                        L._error$("Improper use of _main$");
                    },
                });
            }
        });
        globalThis["__tokio_internal_$Injecter"]();
    }
    Tokio.app = new runtime.App();
    BUS.post(new PostInitEvent());
    return Tokio;
}