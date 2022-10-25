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
exports.L = void 0;
const log = __importStar(require("./logger"));
/**
 *# Namespace with Logging tools
*
* @namespace
*/
var L;
(function (L) {
    /**
     * @function
     * @param {log.Level} level
     * @returns {void}
    */
    L._setLogLevel$ = function (level) {
        log.setLogLevel(log.StringToLevel(log.Level.Info, level));
    };
    /**
     * Logs information
     * @function
     * @param {any} m
     * @returns {void}
    */
    L._info$ = function (m) {
        log.getLogger().info(m, log.tracing.__trace());
    };
    /**
     * Logs a debug message
     * @function
     * @param {any} m
     * @returns {void}
    */
    L._debug$ = function (m) {
        log.getLogger().debug(m, log.tracing.__trace());
    };
    /**
     * Logs a trace
     * @function
     * @param {any} m
     * @returns {void}
    */
    L._trace$ = function (m) {
        log.getLogger().trace(m, log.tracing.__trace());
    };
    /**
     * Logs a warning
     * @function
     * @param {any} m
     * @returns {void}
    */
    L._warn$ = function (m) {
        log.getLogger().warn(m, log.tracing.__trace());
    };
    /**
     * Logs an error
     * @function
     * @param {any} m
     * @returns {void}
    */
    L._error$ = function (m) {
        log.getLogger().error(m, log.tracing.__trace());
    };
    /**
     * ## **REVEALS THE GUTS, USE WITH CAUTION**
     * *No docs
     *@namespace
    */
    let _;
    (function (_) {
        _._CustomLogger$ = function (logger) {
            logger.trace("Set Custom Logger", log.tracing.__trace());
            return logger;
        };
        _.__trace = function () {
            return log.tracing.__trace();
        };
        _._setLogger$ = function (logger) {
            log.setLogger(logger);
        };
        _.$LEVEL = log.Level;
    })(_ = L._ || (L._ = {}));
})(L = exports.L || (exports.L = {}));
