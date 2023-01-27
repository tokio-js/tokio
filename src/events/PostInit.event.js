"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInitEvent = void 0;
const orbit_1 = require("orbit");
class PostInitEvent extends orbit_1.Event {
    constructor() {
        super("TOKIO.PostInitEvent");
    }
}
exports.PostInitEvent = PostInitEvent;
