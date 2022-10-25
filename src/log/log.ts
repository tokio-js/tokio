import * as log from './logger';

/**
 *# Namespace with Logging tools
*
* @namespace 
*/
export namespace L {

    /**
     * @function
     * @param {log.Level} level
     * @returns {void}
    */
    export const _setLogLevel$ = function(level?: "Error" | "Warn" | "Info" | "Debug" | "Trace"): void {
        log.setLogLevel(log.StringToLevel(log.Level.Info,level))
    }

    /**
     * Logs information
     * @function
     * @param {any} m
     * @returns {void}
    */
    export const _info$ = function(m: any): void {
        log.getLogger().info(m,log.tracing.__trace());
    }

    /**
     * Logs a debug message
     * @function
     * @param {any} m
     * @returns {void}
    */
    export const _debug$ = function(m: any): void {
        log.getLogger().debug(m,log.tracing.__trace());
    }

    /**
     * Logs a trace
     * @function
     * @param {any} m
     * @returns {void}
    */
    export const _trace$ = function(m: any): void {
        log.getLogger().trace(m,log.tracing.__trace());
    }

    /**
     * Logs a warning
     * @function
     * @param {any} m
     * @returns {void}
    */
    export const _warn$ = function(m: any): void {
        log.getLogger().warn(m,log.tracing.__trace());
    }

    /**
     * Logs an error
     * @function
     * @param {any} m
     * @returns {void}
    */
    export const _error$ = function(m: any): void {
        log.getLogger().error(m,log.tracing.__trace());
    }

    /**
     * ## **REVEALS THE GUTS, USE WITH CAUTION** 
     * *No docs
     *@namespace
    */
    export namespace _ {
        export const _CustomLogger$ = function<T extends log.BaseLogger>(logger: T): T {
            logger.trace("Set Custom Logger",log.tracing.__trace());
            return logger;
        }
        export const __trace = function(): string[] {
            return log.tracing.__trace();
        }
        export const _setLogger$ = function<T extends log.BaseLogger>(logger: "Console" | "IO" | T): void {
            log.setLogger(logger);
        }
        export const $LEVEL = log.Level;
    }
}