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
 * @namespace Tokio
*/
export namespace Tokio {
    type LoadFeatures = "NOINJECT" | "OLDCONSOLE" | "NOAUTOINIT" | "NOTURBOCORELOGS" | string;

    /**
     * ## Loads TokioJS
     * ### If you are a regular user don't pass any arguments to this function.
     * However, if you are a power user, you already know what to do.
     * @param {...LoadFeatures[]} features
     * @returns {typeof TokioType} TokioJS
     */
    export function load(...features: LoadFeatures[]): typeof TokioType {
    export function load(...features: LoadFeatures[]): typeof TokioType {
        const { runtimeInjector } = require("./runtime/runtimeinjecter");
        return runtimeInjector(features);
        return runtimeInjector(features);
    }

    /**
     * @private
     * @access private
     * @memberof Tokio
     * @description Flags for Tokio, should not be used by everyday user, only for developers
     */
    export var FLAGS = {};

    /**
     * @private
     * @access private
     * @memberof Tokio
     * @description Exportables for Tokio internals, should not be used by everyday user, only for developers
     */
    export var EXPORTABLES = {};

    /**
     * @private
     * @access private
     * @memberof Tokio
     * @description Exportables for Tokio internals, should not be used by everyday user, only for developers
     */
    export var EXPORTABLES = {};
}