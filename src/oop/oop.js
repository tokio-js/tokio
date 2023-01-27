"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.OOP = void 0;
const struct = __importStar(require("./struct"));
var OOP;
(function (OOP) {
    /**
     * @function
     * @param {string | undefined} name Name of the structure
     * @returns {struct.StructBuilder}
    */
    OOP._Struct$ = function (name) {
        return new struct.StructBuilder(name);
    };
    /**
     * @function
     * @param {string | undefined} name Name of the structure
     * @returns {Template}
    */
    OOP._Template$ = function (name) {
        return new TemplateBuilder(name);
    };
    /**
     * @class
     *
    */
    class Template {
        constructor(name, args) {
            this.name = name;
            this.data = args;
        }
        inject() {
            Object.defineProperty(globalThis, "__tokio_internal_injecter", { value: () => {
                    let res = "interface " + this.name + " {";
                    for (let key in this.data) {
                        res += "" + key + ": " + this.data[key] + ",";
                    }
                    res += "}";
                    console.error(`Object.defineProperty(globalThis, "$$${this.name}", { value: '${res}' });`);
                } });
        }
    }
    OOP.Template = Template;
    class TemplateBuilder {
        constructor(name) {
            this.data = {};
            this.name = name;
        }
        set(key, value) {
            this.data[key] = value;
            return this;
        }
        build() {
            return new Template(this.name, this.data);
        }
    }
    OOP.TemplateBuilder = TemplateBuilder;
    class IPropertyBuilder {
        constructor(obj) {
            this.data = {};
            this.data = obj ? undefined : {};
        }
        set(key, value) {
            this.data[key] = value;
            return this;
        }
        build() {
            return this.data;
        }
    }
    OOP.IPropertyBuilder = IPropertyBuilder;
})(OOP = exports.OOP || (exports.OOP = {}));
