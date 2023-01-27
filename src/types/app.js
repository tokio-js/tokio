"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppType = void 0;
class AppType {
    constructor() { }
    /**
     * ## Sets the main function of the app
     * Function has a parameter of type `string[]` \
     * Example:
     * ```ts
     * app.main = (args: string[]) => {
     *     console.log("Hello World")
     *     console.log(args)
     * }
     *
     * app.run();
     * ```
     * @param {(_:string[])=>void} func function to be set as main
     */
    set main(func) { }
    /**
     * ## Returns the arguments passed to the app
     * @returns {string[]} arguments passed to the app
     */
    get args() { return [""]; }
    /**
     * ## Runs the app
     * @returns {void}
     */
    run() { }
}
exports.AppType = AppType;
