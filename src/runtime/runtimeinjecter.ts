import * as corelog from "../corelog/corelog";
import * as macros from "../macros/macros";
import * as runtime from "./runtime";
import { TsTools } from "./tstools";
import * as oop from "../oop/oop";



let USEINJECT = true;



export function runtimeInjector(...inject: ("NOINJECT" | "OLDCONSOLE" | "NOAUTOINIT")[]) {
    if(inject.includes("NOAUTOINIT")) {
        TsTools.L._trace$('"NOAUTOINIT" feature is enabled, manual injection is required');
        USEINJECT = false;
    } else {
        corelog.CoreLog.init();
        TsTools.L._setLogLevel$("Debug")
        TsTools.L._trace$("CORELOG is enabled");
    }
    if(inject.includes("NOINJECT")) {
        TsTools.L._trace$('"NOINJECT" feature is enabled, manual injection is required');
        USEINJECT = false;
    }
    if(inject.includes("OLDCONSOLE")) {
        // VOID
    } else {
        console.log = function(...args: any[]) {
            TsTools.L._info$(args);
        }
    }
    if(USEINJECT) {
        Object.defineProperty(globalThis, "__$Injecter", {
            value: () => {
                Object.defineProperty(globalThis, "M", {
                    value: macros.M
                });
                Object.defineProperty(globalThis, "OOP", {
                    value: oop.OOP
                });
                Object.defineProperty(globalThis, "L", {
                    value: TsTools.L
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
                        TsTools.L._error$("Improper use of _main$");
                    },
                });
            }
        });
        globalThis["__$Injecter"]();
    }
    TsTools.app = new runtime.App();
    return TsTools;
}