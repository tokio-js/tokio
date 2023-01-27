import { MacrosType } from "./macros";
import { LogType } from "./log";
import { AppType } from "./app";
import { OOP as OOPType } from "../oop/oop";
export declare namespace TokioType {
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
    var app: AppType;
    /**
     * ## Namespace with tools for Macros
     *
     * @namespace
     */
    var M: typeof MacrosType;
    /**
     * # Namespace with Logging tools
     *
     * @namespace
     */
    var L: typeof LogType;
    /**
     * # Namespace with OOP tools
     *
     * @namespace
     */
    var OOP: typeof OOPType;
}
