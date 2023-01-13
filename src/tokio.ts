import { TokioType } from "./types/tokio";

/**
 * # TokioJS
 * ## Useful Utilities for Typescript
 * ### Examples: [./examples](./examples/README.md)
 * ### Tools Included:
 * * Macros
 *   * Easy to create
 *   * Auto-added to global scope
 *   * Can be used cross-file
 *   * Used in 99% of the tools
 * * Logging
 *   * Default Built-in Loggers (`ConsoleLogger` and `IOLogger`)
 *     * [**CoreLog**](./doc/CoreLog.md)
 *     * SAFE function caller tracer
 *     * rust bindings for logging EVERYTHING (W.I.P)
 *   * Fully Customizable Loggers
 * * Runtime
 *   * Automatic creation on import
 *   * Automatic injection of `Tokio.app` into all files
 * 
 * ### Examples:
 *
 * ```js
 * import tokiojs from "tokiojs";
 * const { app, L, M, OOP } = tokiojs.load();
 * 
 * L._info$("Hello World");
 * ```
*/
export namespace Tokio {

    /**
     * ## Loads TokioJS
     * ### If you are a regular user don't pass any arguments to this function.
     * However, if you are a power user, you already know what to do.
     * @param {undefined | Features[]} features features to enable
     * @returns {typeof TokioType} TokioJS
     */
    export function load(...features: ("NOINJECT" | "OLDCONSOLE" | "NOAUTOINIT" | string)[]): typeof TokioType {
        const { runtimeInjector } = require("./runtime/runtimeinjecter");
        return runtimeInjector(...features);
    }

    /**
     * @private
     * @access private
     * @memberof Tokio
     * @description Flags for Tokio, should not be used by everyday user, only for developers
     */
    export var FLAGS = {};
}
