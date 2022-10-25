import * as log from './logger';
/**
 *# Namespace with Logging tools
*
* @namespace
*/
export declare namespace L {
    /**
     * @function
     * @param {log.Level} level
     * @returns {void}
    */
    const _setLogLevel$: (level?: "Error" | "Warn" | "Info" | "Debug" | "Trace") => void;
    /**
     * Logs information
     * @function
     * @param {any} m
     * @returns {void}
    */
    const _info$: (m: any) => void;
    /**
     * Logs a debug message
     * @function
     * @param {any} m
     * @returns {void}
    */
    const _debug$: (m: any) => void;
    /**
     * Logs a trace
     * @function
     * @param {any} m
     * @returns {void}
    */
    const _trace$: (m: any) => void;
    /**
     * Logs a warning
     * @function
     * @param {any} m
     * @returns {void}
    */
    const _warn$: (m: any) => void;
    /**
     * Logs an error
     * @function
     * @param {any} m
     * @returns {void}
    */
    const _error$: (m: any) => void;
    /**
     * ## **REVEALS THE GUTS, USE WITH CAUTION**
     * *No docs
     *@namespace
    */
    namespace _ {
        const _CustomLogger$: <T extends log.BaseLogger>(logger: T) => T;
        const __trace: () => string;
        const _setLogger$: <T extends log.BaseLogger>(logger: "Console" | "IO" | T) => void;
        const $LEVEL: typeof log.Level;
    }
}
//# sourceMappingURL=log.d.ts.map