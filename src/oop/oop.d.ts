import * as struct from "./struct";
export declare namespace OOP {
    /**
     * @function
     * @param {string | undefined} name Name of the structure
     * @returns {struct.StructBuilder}
    */
    const _Struct$: (name: string) => struct.StructBuilder;
    /**
     * @function
     * @param {string | undefined} name Name of the structure
     * @returns {Template}
    */
    const _Template$: (name: string) => TemplateBuilder;
    /**
     * @interface
    */
    interface ITemplate {
        [key: string]: any;
    }
    /**
     * @class
     *
    */
    class Template {
        private name;
        private data;
        constructor(name: string, args: ITemplate);
        inject(): void;
    }
    class TemplateBuilder implements Builder<TemplateBuilder, Template> {
        private name;
        private data;
        constructor(name: string);
        set(key: string, value: any): TemplateBuilder;
        build(): Template;
    }
    interface IProperty {
        [key: string]: any;
    }
    class IPropertyBuilder implements Builder<IPropertyBuilder, IProperty> {
        private data;
        constructor(obj?: object);
        set(key: string, value: any): IPropertyBuilder;
        build(): IProperty;
    }
    interface Builder<ThingBuilder, Thing> {
        build(): Thing;
        set(key: string, value: any): ThingBuilder;
    }
}
