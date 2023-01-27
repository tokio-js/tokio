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
exports._INTERNAL = exports.L = void 0;
const log = __importStar(require("./logger"));
exports.L = {
    _setLogLevel$: (level) => {
        var lvl = log.Level.Info;
        switch (level) {
            case "Error":
                lvl = log.Level.Error;
            case "Warn":
                lvl = log.Level.Warn;
            case "Debug":
                lvl = log.Level.Debug;
            case "Trace":
                lvl = log.Level.Trace;
            default:
                lvl = log.Level.Info;
        }
        log.setLogLevel(lvl);
    },
    _info$: (...m) => {
        log.getLogger().info(m, log.tracing.trace());
    },
    _debug$: (...m) => {
        log.getLogger().debug(m, log.tracing.trace());
    },
    _trace$: (...m) => {
        log.getLogger().trace(m, log.tracing.trace());
    },
    _warn$: (...m) => {
        log.getLogger().warn(m, log.tracing.trace());
    },
    _error$: (...m) => {
        log.getLogger().error(m, log.tracing.trace());
    }
};
var _INTERNAL;
(function (_INTERNAL) {
    _INTERNAL._CustomLogger$ = function (logger) {
        logger.trace("Set Custom Logger", log.tracing.trace());
        return logger;
    };
    _INTERNAL.trace = function () {
        return log.tracing.trace();
    };
    _INTERNAL._setLogger$ = function (logger) {
        log.setLogger(logger);
    };
    _INTERNAL.$LEVEL = log.Level;
})(_INTERNAL = exports._INTERNAL || (exports._INTERNAL = {}));
