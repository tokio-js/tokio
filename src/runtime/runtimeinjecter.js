"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtimeInjector = void 0;
const corelog = __importStar(require("../corelog/corelog"));
const macros = __importStar(require("../macros/macros"));
const runtime = __importStar(require("./runtime"));
const tstools_1 = require("./tstools");
const oop = __importStar(require("../oop/oop"));
let USEINJECT = true;
function runtimeInjector(...inject) {
    if (inject.includes("NOAUTOINIT")) {
        tstools_1.TsTools.L._trace$('"NOAUTOINIT" feature is enabled, manual injection is required');
        USEINJECT = false;
    }
    else {
        corelog.CoreLog.init();
        tstools_1.TsTools.L._setLogLevel$("Debug");
        tstools_1.TsTools.L._trace$("CORELOG is enabled");
    }
    if (inject.includes("NOINJECT")) {
        tstools_1.TsTools.L._trace$('"NOINJECT" feature is enabled, manual injection is required');
        USEINJECT = false;
    }
    if (inject.includes("OLDCONSOLE")) {
        // VOID
    }
    else {
        console.log = function (...args) {
            tstools_1.TsTools.L._info$(args);
        };
    }
    if (USEINJECT) {
        Object.defineProperty(globalThis, "__$Injecter", {
            value: () => {
                Object.defineProperty(globalThis, "M", {
                    value: macros.M
                });
                Object.defineProperty(globalThis, "OOP", {
                    value: oop.OOP
                });
                Object.defineProperty(globalThis, "L", {
                    value: tstools_1.TsTools.L
                });
                Object.defineProperty(globalThis, "_main$", {
                    set(func) {
                        if (typeof func === typeof Function) {
                            runtime.runner(func).run();
                        }
                        else {
                            runtime.runner(() => { console.log("Hello World"); }).run();
                        }
                    },
                    get() {
                        tstools_1.TsTools.L._error$("Improper use of _main$");
                    },
                });
            }
        });
        globalThis["__$Injecter"]();
    }
    tstools_1.TsTools.app = new runtime.App();
    return tstools_1.TsTools;
}
exports.runtimeInjector = runtimeInjector;
