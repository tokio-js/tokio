export namespace LogType {

    /**
     * Sets the current log level.
     * 
     * options include: 
     * * `Error`
     * * `Warn`
     * * `Info`
     * * `Debug`
     * * `Trace`
     * @param {"Error" | "Warn" | "Info" | "Debug" | "Trace" | undefined} level
     * @returns {void}
     */
    export function _setLogLevel$(level?: "Error" | "Warn" | "Info" | "Debug" | "Trace"): void {}

    /**
     * Logs some information
     * @param {any[] | undefined} m
     * @returns {void}
     */
    export function _info$(...m: any[]): void {}

    /**
     * Logs a debug message
     * @function
     * @param {any[] | undefined} m
     * @returns {void}
     */
    export function _debug$(...m: any[]): void {}

    /**
     * Logs a trace
     * @function
     * @param {any[] | undefined} m
     * @returns {void}
     */
    export function _trace$(...m: any[]): void {}

    /**
     * Logs a warning
     * @function
     * @param {any[] | undefined} m
     * @returns {void}
     */
    export function _warn$(...m: any[]): void {}

    /**
     * Logs an error
     * @function
     * @param {any} m
     * @returns {void}
     */
    export function _error$(...m: any[]): void {}
}