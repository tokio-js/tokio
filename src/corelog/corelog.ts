import * as bin from "../bin";


interface Tracer {
    corelog(m: any): void,
    toplog(m: any): void
}

let TRACER: Tracer = {
    corelog(_: any): void {},
    toplog(_: any): void {}
};


export class CoreLog {
    /**
     * Initializes CORELOG
     * @function
     * @returns {void}
    */
    public static init(): void {
        let logger: any;
        logger = new (bin.load()).CoreLog();
        TRACER = {
            corelog(m: any): void {
                logger.corelog(m);
            },
            toplog(m) {
                logger.toplog(m);
            },
        }
    }
}

export function corelog(m: string): void {
    TRACER.corelog(m);
}

export function toplog(m: string): void {
    TRACER.toplog(m);
}

export function get(): boolean {
    return bin.get();
}
