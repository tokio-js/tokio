export declare namespace MacrosType {
    /**
     * ## `$New`
     * creates a new macro that can later be called
     * @param {string} name name of the macro
     * @param {Function} f function to be executed
     */
    function $New(name: string, f: Function): void;
    /**
     * ## `_`
     * executes a macro with the given name. \
     * This is a setter, so you can use it like this:
     * ```ts
     * M._ = "macroName"
     * ```
     */
    var _: {};
}
