//! DO NOT CHANGE, won't work anymore if you do
import core from "../bin";


interface Tracer {
    log(m: any): void
}
let TRACER: Tracer = { log(m: any): void {} };


export class CoreLog {
    /**
     * Initializes CORELOG
     * @function
     * @returns {void}
    */
    public static init(): void {
        let logger: any;
        logger = new core.CoreLog();
        TRACER = {
            log(m: any): void {
                logger.log(m);
            }
        }
        TRACER.log("CoreLog loaded");
    }

    public log(m: any): void {
        TRACER.log(m);
    }
}

export function log(m: any): void {
    TRACER.log(m);
}