"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructBuilder = exports.Struct = void 0;
class Struct {
    constructor() {
        Object.defineProperty(Struct.prototype, "__struct__", {
            value: {
                "name": "Struct",
            }
        });
    }
}
exports.Struct = Struct;
class StructBuilder {
    constructor(name) {
        this.data = new Struct();
        this.data["__struct__"].name = name;
    }
    set(name, data) {
        this.data["__struct__"][name] = data;
        return this;
    }
    build() {
        return this.data;
    }
}
exports.StructBuilder = StructBuilder;
