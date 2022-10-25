import * as macros from "../macros/macros";
import * as thread from "./thread";
import * as oop from "../oop/oop";
import * as log from "../log/log";
import { App } from "./runtime";


/**
 * # TSTools
 */
export namespace TsTools {

    export var app: App;

    /**
     *## Namesapce with tools for dealing with OOP
     *
     * @namespace 
    */
    export var OOP = oop.OOP;

    /**
     *## Namespace with tools for Macros
     *
     * @namespace 
    */
    export const M = macros.M;

    /**
     *# Namespace with Logging tools
    *
    * @namespace 
    */
    export const L = log.L;

    export const summon = function(func: Function) {
        thread.summon(func)
    }
};