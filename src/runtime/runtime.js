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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _App_main;
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.runner = exports.runtimeInjector = void 0;
const rinjector = __importStar(require("./runtimeinjecter"));
const log_1 = require("../log/log");
const cmd_args = process.argv.slice(2);
class Runtime {
    constructor(main) {
        this.func = main;
    }
    run() {
        this.pre();
        (this.func)(cmd_args);
        this.post();
    }
    pre() {
        log_1.L._trace$("Pre run");
    }
    post() {
        log_1.L._trace$("Post run");
    }
}
function _runner(main) {
    return new Runtime(main);
}
exports.runtimeInjector = rinjector.runtimeInjector;
exports.runner = _runner;
class App {
    constructor() {
        _App_main.set(this, void 0);
        __classPrivateFieldSet(this, _App_main, (_) => {
            console.log("Hello World");
        }, "f");
        log_1.L._trace$("App created");
    }
    set main(main) {
        __classPrivateFieldSet(this, _App_main, main, "f");
    }
    get args() {
        return cmd_args;
    }
    run() {
        if (__classPrivateFieldGet(this, _App_main, "f")) {
            log_1.L._trace$("running app");
            return _runner(__classPrivateFieldGet(this, _App_main, "f")).run();
        }
        else {
            return _runner(__classPrivateFieldGet(this, _App_main, "f")).run();
        }
    }
}
exports.App = App;
_App_main = new WeakMap();
