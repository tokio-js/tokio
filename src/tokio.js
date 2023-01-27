"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokio = void 0;
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
var Tokio;
(function (Tokio) {
    /**
     * ## Loads TokioJS
     * ### If you are a regular user don't pass any arguments to this function.
     * However, if you are a power user, you already know what to do.
     * @param {...LoadFeatures[]} features
     * @returns {typeof TokioType} TokioJS
     */
    function load(...features) {
        const { runtimeInjector } = require("./runtime/runtimeinjecter");
        return runtimeInjector(features);
        return runtimeInjector(features);
    }
    Tokio.load = load;
    /**
     * @private
     * @access private
     * @memberof Tokio
     * @description Flags for Tokio, should not be used by everyday user, only for developers
     */
    Tokio.FLAGS = {};
    /**
     * @private
     * @access private
     * @memberof Tokio
     * @description Exportables for Tokio internals, should not be used by everyday user, only for developers
     */
    Tokio.EXPORTABLES = {};
    /**
     * @private
     * @access private
     * @memberof Tokio
     * @description Exportables for Tokio internals, should not be used by everyday user, only for developers
     */
    Tokio.EXPORTABLES = {};
})(Tokio = exports.Tokio || (exports.Tokio = {}));
