import * as macros from "../macros/macros";
import * as oop from "../oop/oop";
import * as log from "../log/log";
import { App } from "./runtime";
/**
 * # TSTools
 */
export declare namespace TsTools {
    var app: App;
    /**
     *## Namesapce with tools for dealing with OOP
     *
     * @namespace
    */
    var OOP: typeof oop.OOP;
    /**
     *## Namespace with tools for Macros
     *
     * @namespace
    */
    const M: typeof macros.M;
    /**
     *# Namespace with Logging tools
    *
    * @namespace
    */
    const L: typeof log.L;
    const summon: (func: Function) => void;
}
//# sourceMappingURL=tstools.d.ts.map