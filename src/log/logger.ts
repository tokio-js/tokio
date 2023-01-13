import * as corelog from "../corelog/corelog";
import * as tracing from "../tracing/tracing";
export { tracing };
export namespace __INTERNALS {
    export var _CORELOG_ENABLED: boolean = true;
    export const unsafeLog = (m: string): void => {
        let r = tracing.format(m,"TRC",tracing.trace(),new Date());
        corelog.corelog(r[1]);
    }
}
export enum Level {
    Info = 2,
    Debug = 3,
    Trace = 4,
    Warn = 1,
    Error = 0
};
export function LevelToString(level: Level): string {
    switch (level) {
        case Level.Info:
            return "INF"
        case Level.Debug:
                return "DBG"
        case Level.Trace:
            return "TRC"
        case Level.Warn:
                return "WRN"
        case Level.Error:
            return "ERR"
    }
}
export function StringToLevel(dfault: Level, level?: string): Level {
    let lvl: Level;
    switch (level) {
        case "ERR":
            lvl = Level.Error;
            break;
        case "WRN":
            lvl = Level.Warn;
            break;
        case "INF":
            lvl = Level.Info;
            break;
        case "DBG":
            lvl = Level.Debug;
            break;
        case "TRC":
            lvl = Level.Trace;
            break;
        default:
            lvl = dfault;
            break;
    }
    return lvl;
}
export abstract class BaseLogger {
    public abstract info(m: any, file: string[]): void;
    public abstract debug(m: any, file: string[]): void;
    public abstract trace(m: any, file: string[]): void;
    public abstract warn(m: any, file: string[]): void;
    public abstract error(m: any, file: string[]): void;
}
class UsedLogger<T extends BaseLogger> {
    private logger: T;
    constructor(logger: T) {
        this.logger = logger;
    }
    public info(m: any, file: string[]) {
        this.logger.info(m,file)
    }
    public debug(m: any, file: string[]) {
        this.logger.debug(m,file)
    }
    public trace(m: any, file: string[]) {
        this.logger.trace(m,file)
    }
    public warn(m: any, file: string[]) {
        this.logger.warn(m,file)
    }
    public error(m: any, file: string[]) {
        this.logger.error(m,file)
    }
}
class ConsoleLogger {
    public info(m: any, file: string[]) {
        ConsoleLogger.log(m,file,Level.Info);
    }
    public debug(m: any, file: string[]) {
        ConsoleLogger.log(m,file,Level.Debug);
    }
    public trace(m: any, file: string[]) {
        ConsoleLogger.log(m,file,Level.Trace);
    }
    public warn(m: any, file: string[]) {
        ConsoleLogger.log(m,file,Level.Warn);
    }
    public error(m: any, file: string[]) {
        ConsoleLogger.log(m,file,Level.Error);
    }
    private static __format(m: any, level: Level, file: string[], rn: Date){
        return tracing.format(m,LevelToString(level),file,rn);
    }
    private static __log(m: string): void { process.stdout.write(m + "\n") }
    private static __cog(m: string[]): void {
        if(__INTERNALS._CORELOG_ENABLED){
            corelog.corelog(m[1]);
            corelog.toplog(m[2]);
        }
    }
    public static log(m: any, file: string[], level: Level){
        let res = this.__format(m,level,file,new Date());
        if(level.valueOf()<=getLogLevel().valueOf()){this.__log(res[0])}
        if(level.valueOf()<=__getLevel().valueOf()){this.__cog(res)}
    }
}
class IOLogger {
    public info(m: any, file: string[]) {
        IOLogger.log(m,file,Level.Info);
    }
    public debug(m: any, file: string[]) {
        IOLogger.log(m,file,Level.Debug);
    }
    public trace(m: any, file: string[]) {
        IOLogger.log(m,file,Level.Trace);
    }
    public warn(m: any, file: string[]) {
        IOLogger.log(m,file,Level.Warn);
    }
    public error(m: any, file: string[]) {
        IOLogger.log(m,file,Level.Error);
    }
    private static __format(m: any, level: Level, file: string[], rn: Date){
        return tracing.format(m,LevelToString(level),file,rn);
    }
    private static __log(m: string, err: boolean): void {
        if(err){
            process.stderr.write(m)
        } else {
            process.stdout.write(m)
        }
    }
    private static __cog(m: string[]): void {
        if(__INTERNALS._CORELOG_ENABLED){
            corelog.corelog(m[1]);
            corelog.toplog(m[2]);
        }
    }
    public static log(m: any, file: string[], level: Level){
        let err = false;
        let res = this.__format(m,level,file,new Date());
        if(level.valueOf() == Level.Error.valueOf()) { err = true }
        if(level.valueOf() <= getLogLevel().valueOf()){this.__log(res[0],err)}
        if(level.valueOf() <= __getLevel().valueOf()){this.__cog(res)}
    }
}

let LOGLEVEL: Level = Level.Info;
let LOGGER: UsedLogger<any>;


/**
 * sets the log level to use
 * @function
 * @param {Level} level level to set the logging to
 * @returns {void}
 */
export function setLogLevel(level: Level): void {
    LOGLEVEL = level;
}

/**
 * sets the logger to use
 * @function
 * @param {"Console" | "IO" | T} type
 * @returns {void}
*/
export function setLogger<T extends BaseLogger>(type: "Console" | "IO" | T): void {
    if(type == "Console") {
        LOGGER = new UsedLogger(new ConsoleLogger());
    } else if(type == "IO"){
        LOGGER = new UsedLogger(new IOLogger());
    } else {
        LOGGER = new UsedLogger(type);
    } 
}

/**
 * gets the currently used log level
 * @function
 * @returns {Level}
*/
export function getLogLevel(): Level { return LOGLEVEL; }

/**
 * gets the currently used logger
 * @function
*/
export function getLogger<T extends BaseLogger>(): UsedLogger<T> {
    if(LOGGER == undefined){ setLogger("Console") }
    return LOGGER;
}

let LEVEL = Level.Trace;
export const __setLevel = function(level: Level): void { LEVEL = level }
export const __getLevel = function(): Level { return LEVEL }