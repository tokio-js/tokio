export declare namespace LogType {
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
    function _setLogLevel$(level?: "Error" | "Warn" | "Info" | "Debug" | "Trace"): void;
    /**
     * Logs some information
     * @param {any[] | undefined} m
     * @returns {void}
     */
    function _info$(...m: any[]): void;
    /**
     * Logs a debug message
     * @function
     * @param {any[] | undefined} m
     * @returns {void}
     */
    function _debug$(...m: any[]): void;
    /**
     * Logs a trace
     * @function
     * @param {any[] | undefined} m
     * @returns {void}
     */
    function _trace$(...m: any[]): void;
    /**
     * Logs a warning
     * @function
     * @param {any[] | undefined} m
     * @returns {void}
     */
    function _warn$(...m: any[]): void;
    /**
     * Logs an error
     * @function
     * @param {any} m
     * @returns {void}
     */
    function _error$(...m: any[]): void;
}
