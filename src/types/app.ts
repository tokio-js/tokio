export class AppType {
    constructor() {}

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
    public set main(
        func: ( args: string[] ) => void
    ) { }

    /**
     * ## Returns the arguments passed to the app
     * @returns {string[]} arguments passed to the app
     */
    public get args(): string[] { return[""] }

    /**
     * ## Runs the app
     * @returns {void} 
     */
    public run(): void {}
}