"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacrosType = void 0;
var MacrosType;
(function (MacrosType) {
    /**
     * ## `$New`
     * creates a new macro that can later be called
     * @param {string} name name of the macro
     * @param {Function} f function to be executed
     */
    function $New(name, f) { }
    MacrosType.$New = $New;
    /**
     * ## `_`
     * executes a macro with the given name. \
     * This is a setter, so you can use it like this:
     * ```ts
     * M._ = "macroName"
     * ```
     */
    MacrosType._ = {};
})(MacrosType = exports.MacrosType || (exports.MacrosType = {}));
