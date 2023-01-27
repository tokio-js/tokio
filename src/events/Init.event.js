"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitEvent = void 0;
const orbit_1 = require("@tokio-js/orbit");
class InitEvent extends orbit_1.Event {
    constructor() {
        super("TOKIO.InitEvent");
    }
}
exports.InitEvent = InitEvent;
