"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsTools = void 0;
const macros = __importStar(require("../macros/macros"));
const thread = __importStar(require("./thread"));
const oop = __importStar(require("../oop/oop"));
const log = __importStar(require("../log/log"));
/**
 * # TSTools
 */
var TsTools;
(function (TsTools) {
    /**
     *## Namesapce with tools for dealing with OOP
     *
     * @namespace
    */
    TsTools.OOP = oop.OOP;
    /**
     *## Namespace with tools for Macros
     *
     * @namespace
    */
    TsTools.M = macros.M;
    /**
     *# Namespace with Logging tools
    *
    * @namespace
    */
    TsTools.L = log.L;
    TsTools.summon = function (func) {
        thread.summon(func);
    };
})(TsTools = exports.TsTools || (exports.TsTools = {}));
;
