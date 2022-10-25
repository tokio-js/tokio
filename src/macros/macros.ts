import * as injecter from "./inject";


export namespace M {
    export const $New = function(name: string, f: Function, obj?: object): void {
        injecter.__inject(name, f, obj ? undefined : globalThis);
    }
}