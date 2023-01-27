import * as tracing from "@tokio-js/trutrace";
export { tracing };
export declare namespace __INTERNALS {
    var _CORELOG_ENABLED: boolean;
    const unsafeLog: (m: string) => void;
}
export declare enum Level {
    Info = 2,
    Debug = 3,
    Trace = 4,
    Warn = 1,
    Error = 0
}
export declare function LevelToString(level: Level): string;
export declare function StringToLevel(dfault: Level, level?: string): Level;
export declare abstract class BaseLogger {
    abstract info(m: any, file: string[]): void;
    abstract debug(m: any, file: string[]): void;
    abstract trace(m: any, file: string[]): void;
    abstract warn(m: any, file: string[]): void;
    abstract error(m: any, file: string[]): void;
}
declare class UsedLogger<T extends BaseLogger> {
    private logger;
    constructor(logger: T);
    info(m: any, file: string[]): void;
    debug(m: any, file: string[]): void;
    trace(m: any, file: string[]): void;
    warn(m: any, file: string[]): void;
    error(m: any, file: string[]): void;
}
/**
 * sets the log level to use
 * @function
 * @param {Level} level level to set the logging to
 * @returns {void}
 */
export declare function setLogLevel(level: Level): void;
/**
 * sets the logger to use
 * @function
 * @param {"Console" | "IO" | T} type
 * @returns {void}
*/
export declare function setLogger<T extends BaseLogger>(type: "Console" | "IO" | T): void;
/**
 * gets the currently used log level
 * @function
 * @returns {Level}
*/
export declare function getLogLevel(): Level;
/**
 * gets the currently used logger
 * @function
*/
export declare function getLogger<T extends BaseLogger>(): UsedLogger<T>;
export declare const __setLevel: (level: Level) => void;
export declare const __getLevel: () => Level;
