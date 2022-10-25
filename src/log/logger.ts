import * as corelog from "../corelog/corelog";
import tracing from "../tracing/tracing";
export { tracing };

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
            return "Info"
        case Level.Debug:
                return "Debug"
        case Level.Trace:
            return "Trace"
        case Level.Warn:
                return "Warn"
        case Level.Error:
            return "Error"
    }
}
export function StringToLevel(dfault: Level,level?: string): Level {
    let lvl: Level;
    switch (level) {
        case "Error":
            lvl = Level.Error;
            break;
        case "Warn":
            lvl = Level.Warn;
            break;
        case "Info":
            lvl = Level.Info;
            break;
        case "Debug":
            lvl = Level.Debug;
            break;
        case "Trace":
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
    private static __format(m: any, level: Level, color: string, colorend: string, file: string[], rn: Date){
        return tracing.__format(m,LevelToString(level),color,colorend,file,rn);
    }
    private static __log(m: string): void { process.stdout.write(m + "\n") }
    private static __cog(m: string): void { corelog.log(m); }
    public static log(m: any, file: string[], level: Level){
        let res = this.__format(m,level,"","",file,new Date());
        if(level.valueOf()<=getLogLevel().valueOf()){this.__log(res[0])}
        if(level.valueOf()<=__getLevel().valueOf()){this.__cog(res[1])}
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
    private static __format(m: any, level: Level, color: string, colorend: string, file: string[], rn: Date){
        return tracing.__format(m,LevelToString(level),color,colorend,file,rn);
    }
    private static __log(m: string, err: boolean): void {
        if(err){
            process.stderr.write(m)
        } else {
            process.stdout.write(m)
        }
    }
    private static __cog(m: string): void {
        corelog.log(m);
    }
    public static log(m: any, file: string[], level: Level){
        let err = false;
        let res = this.__format(m,level,"","",file,new Date());
        if(level.valueOf() == Level.Error.valueOf()) { err = true }
        if(level.valueOf() <= getLogLevel().valueOf()){this.__log(res[0],err)}
        if(level.valueOf() <= __getLevel().valueOf()){this.__cog(res[1])}
    }
}

let LOGLEVEL: Level = Level.Info;
let LOGGER;


/**
 * @function
 * @param {Level} level level to set the logging to
 * @returns {void}
 */
export const setLogLevel = function(level: Level): void {
    LOGLEVEL = level;
}

/**
 * @function
 * @param {"Console" | "IO" | T} type
 * @returns {void}
*/
export const setLogger = function<T extends BaseLogger>(type: "Console" | "IO" | T): void {
    if(type == "Console") {
        LOGGER = new UsedLogger(new ConsoleLogger());
    } else if(type == "IO"){
        LOGGER = new UsedLogger(new IOLogger());
    } else {
        LOGGER = new UsedLogger(type);
    } 
}

/**
 * @function
 * @returns {Level}
*/
export const getLogLevel = function():Level{return LOGLEVEL;}

/**
 * @function
*/
export const getLogger = function<T extends BaseLogger>(): UsedLogger<T> {
    if(LOGGER == undefined){setLogger("Console")}
    return LOGGER;
}

let LEVEL = Level.Trace;
export const __setLevel = function(level: Level): void { LEVEL = level }
export const __getLevel = function(): Level { return LEVEL }