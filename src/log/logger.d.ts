import tracing from "../tracing/tracing";
export { tracing };
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
    abstract info(m: any, file: string): void;
    abstract debug(m: any, file: string): void;
    abstract trace(m: any, file: string): void;
    abstract warn(m: any, file: string): void;
    abstract error(m: any, file: string): void;
}
declare class UsedLogger<T extends BaseLogger> {
    private logger;
    constructor(logger: T);
    info(m: any, file: string): void;
    debug(m: any, file: string): void;
    trace(m: any, file: string): void;
    warn(m: any, file: string): void;
    error(m: any, file: string): void;
}
/**
 * @function
 * @param {Level} level level to set the logging to
 * @returns {void}
 */
export declare const setLogLevel: (level: Level) => void;
/**
 * @function
 * @param {"Console" | "IO" | T} type
 * @returns {void}
*/
export declare const setLogger: <T extends BaseLogger>(type: T | "Console" | "IO") => void;
/**
 * @function
 * @returns {Level}
*/
export declare const getLogLevel: () => Level;
/**
 * @function
*/
export declare const getLogger: <T extends BaseLogger>() => UsedLogger<T>;
export declare const __setLevel: (level: Level) => void;
export declare const __getLevel: () => Level;
//# sourceMappingURL=logger.d.ts.map