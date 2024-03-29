import * as rinjector from "./runtimeinjecter";
import { L } from "../log/log";

const cmd_args: string[] = process.argv.slice(2);

class Runtime {
    private func: Function;
    constructor(main: Function) {
        this.func = main;
    }
    public run(): void {
        this.pre();
        (this.func)(cmd_args);
        this.post();
    }

    private pre(){
        L._trace$("Pre run");
    }
    private post(){
        L._trace$("Post run");
    }
}

function _runner(main: Function): Runtime {
    return new Runtime(main);
}


export const runtimeInjector = rinjector.runtimeInjector;
export const runner = _runner;
export class App {
    #main: (_:string[]) => void;
    constructor() {
        this.#main = (_) => {
            console.log("Hello World");
        };
        L._trace$("App created");
    }

    public set main(main: (_:string[]) => void) {
        this.#main = main;
    }

    public get args(): string[] {
        return cmd_args;
    }

    public run(): void {
        if(this.#main) {
            L._trace$("running app");
            return _runner(this.#main).run();
        } else {
            return _runner(this.#main).run();
        }
    }
}
