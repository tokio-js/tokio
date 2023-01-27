import { LogType } from '../types/log';
import * as log from './logger';
export declare const L: typeof LogType;
export declare namespace _INTERNAL {
    const _CustomLogger$: <T extends log.BaseLogger>(logger: T) => T;
    const trace: () => string[];
    const _setLogger$: <T extends log.BaseLogger>(logger: "Console" | "IO" | T) => void;
    const $LEVEL: typeof log.Level;
}
