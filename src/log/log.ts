import { LogType } from '../types/log';
import * as log from './logger';

export const L: typeof LogType = {
    _setLogLevel$: (level?: "Error" | "Warn" | "Info" | "Debug" | "Trace"): void => {
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
        log.setLogLevel(lvl)
    },

    _info$: (...m: any[]): void => {
        log.getLogger().info(m,log.tracing.trace());
    },

    _debug$: (...m: any[]): void => {
        log.getLogger().debug(m,log.tracing.trace());
    },

    _trace$: (...m: any[]): void => {
        log.getLogger().trace(m,log.tracing.trace());
    },

    _warn$: (...m: any[]): void => {
        log.getLogger().warn(m,log.tracing.trace());
    },

    _error$: (...m: any[]): void => {
        log.getLogger().error(m,log.tracing.trace());
    }
}

export namespace _INTERNAL {
    export const _CustomLogger$ = function<T extends log.BaseLogger>(logger: T): T {
        logger.trace("Set Custom Logger",log.tracing.trace());
        return logger;
    }
    export const trace = function(): string[] {
        return log.tracing.trace();
    }
    export const _setLogger$ = function<T extends log.BaseLogger>(logger: "Console" | "IO" | T): void {
        log.setLogger(logger);
    }
    export const $LEVEL = log.Level;
}