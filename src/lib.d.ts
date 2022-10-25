declare const _default: typeof import("./runtime/runtimeinjecter").runtimeInjector;
/**
 * # TSTools
 * ## Useful Tools for Typescript
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
 * * OOP
 *   * Structs
 *   * Templates
 *   * Builders
 *   * Advanced Contructors
 *
 * ### Examples:
 *
 * ```js
 * import * as tst from 'ts-tools';
 * const {_debug$,_error$,_info$,_trace$,_warn$} = tst.L;
 *
 * _info$("Hello World!")
 * ```
 * @function
 * @returns {typeof TsTools}
*/
export = _default;
//# sourceMappingURL=lib.d.ts.map