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
exports.__getLevel = exports.__setLevel = exports.getLogger = exports.getLogLevel = exports.setLogger = exports.setLogLevel = exports.BaseLogger = exports.StringToLevel = exports.LevelToString = exports.Level = exports.__INTERNALS = exports.tracing = void 0;
const tracing = __importStar(require("trutrace"));
exports.tracing = tracing;
const corelog = __importStar(require("corelog"));
var __INTERNALS;
(function (__INTERNALS) {
    __INTERNALS._CORELOG_ENABLED = true;
    __INTERNALS.unsafeLog = (m) => {
        let r = tracing.format(m, "TRC", tracing.trace(), new Date());
        corelog.log("CORE", r[1]);
    };
})(__INTERNALS = exports.__INTERNALS || (exports.__INTERNALS = {}));
var Level;
(function (Level) {
    Level[Level["Info"] = 2] = "Info";
    Level[Level["Debug"] = 3] = "Debug";
    Level[Level["Trace"] = 4] = "Trace";
    Level[Level["Warn"] = 1] = "Warn";
    Level[Level["Error"] = 0] = "Error";
})(Level = exports.Level || (exports.Level = {}));
;
function LevelToString(level) {
    switch (level) {
        case Level.Info:
            return "INF";
        case Level.Debug:
            return "DBG";
        case Level.Trace:
            return "TRC";
        case Level.Warn:
            return "WRN";
        case Level.Error:
            return "ERR";
    }
}
exports.LevelToString = LevelToString;
function StringToLevel(dfault, level) {
    let lvl;
    switch (level) {
        case "ERR":
            lvl = Level.Error;
            break;
        case "WRN":
            lvl = Level.Warn;
            break;
        case "INF":
            lvl = Level.Info;
            break;
        case "DBG":
            lvl = Level.Debug;
            break;
        case "TRC":
            lvl = Level.Trace;
            break;
        default:
            lvl = dfault;
            break;
    }
    return lvl;
}
exports.StringToLevel = StringToLevel;
class BaseLogger {
}
exports.BaseLogger = BaseLogger;
class UsedLogger {
    constructor(logger) {
        this.logger = logger;
    }
    info(m, file) {
        this.logger.info(m, file);
    }
    debug(m, file) {
        this.logger.debug(m, file);
    }
    trace(m, file) {
        this.logger.trace(m, file);
    }
    warn(m, file) {
        this.logger.warn(m, file);
    }
    error(m, file) {
        this.logger.error(m, file);
    }
}
class ConsoleLogger {
    info(m, file) {
        ConsoleLogger.log(m, file, Level.Info);
    }
    debug(m, file) {
        ConsoleLogger.log(m, file, Level.Debug);
    }
    trace(m, file) {
        ConsoleLogger.log(m, file, Level.Trace);
    }
    warn(m, file) {
        ConsoleLogger.log(m, file, Level.Warn);
    }
    error(m, file) {
        ConsoleLogger.log(m, file, Level.Error);
    }
    static __format(m, level, file, rn) {
        return tracing.format(m, LevelToString(level), file, rn);
    }
    static __log(m) { process.stdout.write(m + "\n"); }
    static __cog(m) {
        if (__INTERNALS._CORELOG_ENABLED) {
            corelog.log("CORE", m[1]);
            corelog.log("TOP", m[2]);
        }
    }
    static log(m, file, level) {
        let res = this.__format(m, level, file, new Date());
        if (level.valueOf() <= getLogLevel().valueOf()) {
            this.__log(res[0]);
        }
        if (level.valueOf() <= (0, exports.__getLevel)().valueOf()) {
            this.__cog(res);
        }
    }
}
class IOLogger {
    info(m, file) {
        IOLogger.log(m, file, Level.Info);
    }
    debug(m, file) {
        IOLogger.log(m, file, Level.Debug);
    }
    trace(m, file) {
        IOLogger.log(m, file, Level.Trace);
    }
    warn(m, file) {
        IOLogger.log(m, file, Level.Warn);
    }
    error(m, file) {
        IOLogger.log(m, file, Level.Error);
    }
    static __format(m, level, file, rn) {
        return tracing.format(m, LevelToString(level), file, rn);
    }
    static __log(m, err) {
        if (err) {
            process.stderr.write(m);
        }
        else {
            process.stdout.write(m);
        }
    }
    static __cog(m) {
        if (__INTERNALS._CORELOG_ENABLED) {
            corelog.log("CORE", m[1]);
            corelog.log("TOP", m[2]);
        }
    }
    static log(m, file, level) {
        let err = false;
        let res = this.__format(m, level, file, new Date());
        if (level.valueOf() == Level.Error.valueOf()) {
            err = true;
        }
        if (level.valueOf() <= getLogLevel().valueOf()) {
            this.__log(res[0], err);
        }
        if (level.valueOf() <= (0, exports.__getLevel)().valueOf()) {
            this.__cog(res);
        }
    }
}
let LOGLEVEL = Level.Info;
let LOGGER;
/**
 * sets the log level to use
 * @function
 * @param {Level} level level to set the logging to
 * @returns {void}
 */
function setLogLevel(level) {
    LOGLEVEL = level;
}
exports.setLogLevel = setLogLevel;
/**
 * sets the logger to use
 * @function
 * @param {"Console" | "IO" | T} type
 * @returns {void}
*/
function setLogger(type) {
    if (type == "Console") {
        LOGGER = new UsedLogger(new ConsoleLogger());
    }
    else if (type == "IO") {
        LOGGER = new UsedLogger(new IOLogger());
    }
    else {
        LOGGER = new UsedLogger(type);
    }
}
exports.setLogger = setLogger;
/**
 * gets the currently used log level
 * @function
 * @returns {Level}
*/
function getLogLevel() { return LOGLEVEL; }
exports.getLogLevel = getLogLevel;
/**
 * gets the currently used logger
 * @function
*/
function getLogger() {
    if (LOGGER == undefined) {
        setLogger("Console");
    }
    return LOGGER;
}
exports.getLogger = getLogger;
let LEVEL = Level.Trace;
const __setLevel = function (level) { LEVEL = level; };
exports.__setLevel = __setLevel;
const __getLevel = function () { return LEVEL; };
exports.__getLevel = __getLevel;
