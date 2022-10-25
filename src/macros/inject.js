"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__inject = void 0;
function __inject(name, f, obj) {
    Object.defineProperty(obj, "_" + name + "$", { value: f });
}
exports.__inject = __inject;
