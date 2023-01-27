"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.Config = exports._ = void 0;
const corelog = __importStar(require("corelog"));
const tokio_1 = require("../tokio");
const flags = __importStar(require("./flags"));
const events_1 = require("./events");
function _() { }
exports._ = _;
function check_lazy_load() {
    let globvar = globalThis["LAZY_LOAD_TOKIO"];
    if (typeof globvar === "boolean") {
        Config.LAZY_LOAD = globvar;
        return;
    }
    Config.LAZY_LOAD = false;
}
events_1.BUS.on("TOKIO.PreInitEvent", () => {
    check_lazy_load();
    flags.subscribe({
        id: "TOKIO_INTERNALS",
        enabled: false,
        updateValue: (v) => {
            if (typeof v != "boolean" || v === false) {
                Config.INTERNALS = false;
            }
            else {
                Config.INTERNALS = true;
            }
        },
        onEnable: () => {
            if (!Config.LAZY_LOAD) {
                const { L } = require("../log/log");
                L._setLogLevel$("Trace");
                L._trace$("\"TOKIO_INTERNALS\" flag recieved: enabling unsafe, internal features");
            }
        },
    });
    flags.register();
    flags.subscribe({
        id: "TOKIO_BINLOADER",
        enabled: true,
        updateValue: (v) => {
            if (!Config.INTERNALS && !Config.LAZY_LOAD) {
                const { L } = require("../log/log");
                return L._error$("Internals are not enabled");
            }
            if (typeof v == "boolean" && v == false) {
                corelog.setStatus(false);
            }
            else {
                corelog.setStatus(true);
            }
        },
        onEnable: () => {
            if (!Config.LAZY_LOAD) {
                const { L } = require("../log/log");
                L._setLogLevel$("Trace");
                L._warn$("\"TOKIO_INTERNALS\" flag recieved: enabling unsafe, internal features");
            }
        }
    });
    flags.register();
});
events_1.BUS.on("TOKIO.PreInitEvent", () => {
    flags.subscribe({
        id: "TOKIO_INTERNAL_INIT",
        enabled: false,
        updateValue(v) {
            const { L } = require("../log/log");
            if (!Config.INTERNALS && !Config.LAZY_LOAD) {
                return L._error$("Internals are not enabled");
            }
            if (typeof v === "function") {
                v();
            }
            else {
                L._error$("Expected Function found: " + typeof v);
            }
        },
        onEnable() { },
    });
    flags.subscribe({
        id: "TOKIO_BIN",
        enabled: false,
        updateValue(v) {
            const { L } = require("../log/log");
            if (!Config.INTERNALS && !Config.LAZY_LOAD)
                return L._error$("Internals are not enabled");
            if (v === true) {
                Config.BIN_UTILS = true;
            }
            else {
                Config.BIN_UTILS = false;
            }
        },
        onEnable() { },
    });
    flags.subscribe({
        id: "TOKIO_EXPORT_BUS",
        enabled: false,
        updateValue(v) {
            const { L } = require("../log/log");
            if (!Config.INTERNALS && !Config.LAZY_LOAD)
                return L._error$("Internals are not enabled");
            if (v === true) {
                Config.EXPORT_BUS = true;
            }
            else {
                Config.EXPORT_BUS = false;
            }
        },
        onEnable() { },
    });
    flags.register();
});
events_1.BUS.on("TOKIO.PostInitEvent", () => {
    Object.defineProperty(tokio_1.Tokio.EXPORTABLES, "CONFIG", {
        get() {
            if (Config.INTERNALS) {
                return Config;
            }
            else {
                return undefined;
            }
        },
    });
    Object.defineProperty(tokio_1.Tokio.EXPORTABLES, "BUS", {
        get() {
            if (Config.INTERNALS) {
                return events_1.BUS;
            }
            else {
                return undefined;
            }
        },
    });
});
var Config;
(function (Config) {
    Config.BIN_UTILS = false;
    Config.INTERNALS = false;
    Config.LAZY_LOAD = false;
    Config.EXPORT_BUS = false;
})(Config = exports.Config || (exports.Config = {}));
