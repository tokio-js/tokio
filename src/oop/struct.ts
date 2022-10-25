import { OOP } from "./oop"

export class Struct {
    constructor() {
        Object.defineProperty(Struct.prototype, "__struct__", {
            value: {
                "name": "Struct",
            }
        });
    }
}

export class StructBuilder implements OOP.Builder<StructBuilder,Struct> {
    private data: Struct;
    
    constructor(name: string) {
        this.data = new Struct();
        this.data["__struct__"].name = name;
    }

    public set(name: string, data: any ): StructBuilder {
        this.data["__struct__"][name] = data;
        return this
    }

    public build(): Struct {
        return this.data;
    }
}