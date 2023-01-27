import { OOP } from "./oop";
export declare class Struct {
    constructor();
}
export declare class StructBuilder implements OOP.Builder<StructBuilder, Struct> {
    private data;
    constructor(name: string);
    set(name: string, data: any): StructBuilder;
    build(): Struct;
}
