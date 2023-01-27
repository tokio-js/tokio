"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogType = void 0;
var LogType;
(function (LogType) {
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
    function _setLogLevel$(level) { }
    LogType._setLogLevel$ = _setLogLevel$;
    /**
     * Logs some information
     * @param {any[] | undefined} m
     * @returns {void}
     */
    function _info$(...m) { }
    LogType._info$ = _info$;
    /**
     * Logs a debug message
     * @function
     * @param {any[] | undefined} m
     * @returns {void}
     */
    function _debug$(...m) { }
    LogType._debug$ = _debug$;
    /**
     * Logs a trace
     * @function
     * @param {any[] | undefined} m
     * @returns {void}
     */
    function _trace$(...m) { }
    LogType._trace$ = _trace$;
    /**
     * Logs a warning
     * @function
     * @param {any[] | undefined} m
     * @returns {void}
     */
    function _warn$(...m) { }
    LogType._warn$ = _warn$;
    /**
     * Logs an error
     * @function
     * @param {any} m
     * @returns {void}
     */
    function _error$(...m) { }
    LogType._error$ = _error$;
})(LogType = exports.LogType || (exports.LogType = {}));
