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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__getLevel = exports.__setLevel = exports.getLogger = exports.getLogLevel = exports.setLogger = exports.setLogLevel = exports.BaseLogger = exports.StringToLevel = exports.LevelToString = exports.Level = exports.tracing = void 0;
const corelog = __importStar(require("../corelog/corelog"));
const tracing_1 = __importDefault(require("../tracing/tracing"));
exports.tracing = tracing_1.default;
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
            return "Info";
        case Level.Debug:
            return "Debug";
        case Level.Trace:
            return "Trace";
        case Level.Warn:
            return "Warn";
        case Level.Error:
            return "Error";
    }
}
exports.LevelToString = LevelToString;
function StringToLevel(dfault, level) {
    let lvl;
    switch (level) {
        case "Error":
            lvl = Level.Error;
            break;
        case "Warn":
            lvl = Level.Warn;
            break;
        case "Info":
            lvl = Level.Info;
            break;
        case "Debug":
            lvl = Level.Debug;
            break;
        case "Trace":
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
    static __format(m, level, color, colorend, file, rn) {
        return tracing_1.default.__format(m, LevelToString(level), color, colorend, file, rn);
    }
    static __log(m) { process.stdout.write(m + "\n"); }
    static __cog(m) { corelog.log(m); }
    static log(m, file, level) {
        let res = this.__format(m, level, "", "", file, new Date());
        if (level.valueOf() <= (0, exports.getLogLevel)().valueOf()) {
            this.__log(res[0]);
        }
        if (level.valueOf() <= (0, exports.__getLevel)().valueOf()) {
            this.__cog(res[1]);
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
    static __format(m, level, color, colorend, file, rn) {
        return tracing_1.default.__format(m, LevelToString(level), color, colorend, file, rn);
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
        corelog.log(m);
    }
    static log(m, file, level) {
        let err = false;
        let res = this.__format(m, level, "", "", file, new Date());
        if (level.valueOf() == Level.Error.valueOf()) {
            err = true;
        }
        if (level.valueOf() <= (0, exports.getLogLevel)().valueOf()) {
            this.__log(res[0], err);
        }
        if (level.valueOf() <= (0, exports.__getLevel)().valueOf()) {
            this.__cog(res[1]);
        }
    }
}
let LOGLEVEL = Level.Info;
let LOGGER;
/**
 * @function
 * @param {Level} level level to set the logging to
 * @returns {void}
 */
const setLogLevel = function (level) {
    LOGLEVEL = level;
};
exports.setLogLevel = setLogLevel;
/**
 * @function
 * @param {"Console" | "IO" | T} type
 * @returns {void}
*/
const setLogger = function (type) {
    if (type == "Console") {
        LOGGER = new UsedLogger(new ConsoleLogger());
    }
    else if (type == "IO") {
        LOGGER = new UsedLogger(new IOLogger());
    }
    else {
        LOGGER = new UsedLogger(type);
    }
};
exports.setLogger = setLogger;
/**
 * @function
 * @returns {Level}
*/
const getLogLevel = function () { return LOGLEVEL; };
exports.getLogLevel = getLogLevel;
/**
 * @function
*/
const getLogger = function () {
    if (LOGGER == undefined) {
        (0, exports.setLogger)("Console");
    }
    return LOGGER;
};
exports.getLogger = getLogger;
let LEVEL = Level.Trace;
const __setLevel = function (level) { LEVEL = level; };
exports.__setLevel = __setLevel;
const __getLevel = function () { return LEVEL; };
exports.__getLevel = __getLevel;
