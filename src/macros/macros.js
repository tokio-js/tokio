"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.M = void 0;
exports.M = {
    $New(name, f) {
        globalThis["__tokio_internal_$New"](name, f, undefined);
    },
    _: {}
};
globalThis["__tokio_internal_$New"] = (n, f, o) => {
    Object.defineProperty(o ? undefined : globalThis, "_" + n + "$", { value: f });
    const { L } = require("../log/log");
    L._trace$("Created macro: " + n);
};
Object.defineProperty(exports.M, "_", {
    set(v) {
        const { L } = require("../log/log");
        try {
            L._trace$("Executing macro: " + v);
            return (globalThis["_" + v + "$"])();
        }
        catch (e) {
            L._error$(e);
        }
    }
});
