import * as rinjector from "./runtimeinjecter";
declare class Runtime {
    private func;
    constructor(main: Function);
    run(): void;
    private pre;
    private post;
}
declare function _runner(main: Function): Runtime;
export declare const runtimeInjector: typeof rinjector.runtimeInjector;
export declare const runner: typeof _runner;
export declare class App {
    #private;
    constructor();
    set main(main: (_: string[]) => void);
    get args(): string[];
    run(): void;
}
export {};
