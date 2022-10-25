"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.CoreLog = void 0;
//! DO NOT CHANGE, won't work anymore if you do
const bin_1 = __importDefault(require("../bin"));
let TRACER = { log(m) { } };
class CoreLog {
    /**
     * Initializes CORELOG
     * @function
     * @returns {void}
    */
    static init() {
        let logger;
        logger = new bin_1.default.CoreLog();
        TRACER = {
            log(m) {
                logger.log(m);
            }
        };
        TRACER.log("CoreLog loaded");
    }
    log(m) {
        TRACER.log(m);
    }
}
exports.CoreLog = CoreLog;
function log(m) {
    TRACER.log(m);
}
exports.log = log;
