import { MacrosType } from "./macros";
import { LogType } from "./log";
import { AppType } from "./app";
import { OOP as OOPType } from "../oop/oop";

export namespace TokioType {

    /**
     * ## Tokio App, created automatically on import
     * Used as a simple wrapper for the main function
     * 
     * Example:
     * ```ts
     * const { app, L, M } = tokiojs.load();
     * 
     * app.main = (args: string[]) => {
     *     console.log("Hello World")
     *     console.log(args)
     * }
     * 
     * app.run();
     * ```
     */
    export var app: AppType;

    /**
     * ## Namespace with tools for Macros
     *
     * @namespace 
     */
    export var M: typeof MacrosType;

    /**
     * # Namespace with Logging tools
     *
     * @namespace 
     */
    export var L: typeof LogType;

    /**
     * # Namespace with OOP tools
     * 
     * @namespace
     */
    export var OOP: typeof OOPType;
};