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
        this.main = (_args) => {
        };
        this.main = () => {
            console.log("Hello World");
        };
        log_1.L._trace$("App created");
    }
    run() {
        if (this.main) {
            log_1.L._trace$("running app");
            return _runner(this.main).run();
        }
        else {
            return _runner(this.main).run();
        }
    }
}
exports.App = App;
