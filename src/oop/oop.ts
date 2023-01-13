import * as struct from "./struct";


export namespace OOP {

    /**
     * @function
     * @param {string | undefined} name Name of the structure
     * @returns {struct.StructBuilder}
    */
    export const _Struct$ = function(name: string): struct.StructBuilder {
        return new struct.StructBuilder(name);
    }

    /**
     * @function
     * @param {string | undefined} name Name of the structure
     * @returns {Template}
    */
    export const _Template$ = function (name: string): TemplateBuilder {
        return new TemplateBuilder(name);
    }

    /**
     * @interface
    */
    export interface ITemplate {
        [key: string]: any;
    }
 
    /**
     * @class
     * 
    */
    export class Template {
        private name: string;
        private data: ITemplate;
        constructor(name: string, args: ITemplate) {
            this.name = name;
            this.data = args;
        }
  
        public inject(): void {
            Object.defineProperty(globalThis, "__tokio_internal_injecter", { value: () => {
                let res = "interface " + this.name + " {"
                for (let key in this.data) {
                    res += "" + key + ": " + this.data[key] + ",";
                }
                res += "}";
                console.error(`Object.defineProperty(globalThis, "$$${this.name}", { value: '${res}' });`)
            }});
        }
    }
  
    export class TemplateBuilder implements Builder<TemplateBuilder,Template> {
        private name: string;
        private data: ITemplate = {};
        constructor(name: string) {
            this.name = name;
        }
   
        public set(key: string, value: any): TemplateBuilder {
            this.data[key] = value;
            return this;
        }
   
        public build(): Template {
            return new Template(this.name,this.data);
        }
    }
   
    export interface IProperty {
        [key: string]: any;
    }
   
   
    export class IPropertyBuilder implements Builder<IPropertyBuilder,IProperty> {
        private data: IProperty = {};
        constructor(obj?: object) {
            this.data = obj ? undefined : {};
        }
   
        public set(key: string, value: any): IPropertyBuilder {
            this.data[key] = value;
            return this;
        }
   
        public build(): IProperty {
            return this.data;
        }
    }
   
   
    export interface Builder<ThingBuilder,Thing> {
        build() : Thing;
        set(key: string, value: any) : ThingBuilder;
    }
}