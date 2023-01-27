"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreInitEvent = void 0;
const orbit_1 = require("@tokio-js/orbit");
class PreInitEvent extends orbit_1.Event {
    constructor() {
        super("TOKIO.PreInitEvent");
    }
}
exports.PreInitEvent = PreInitEvent;
