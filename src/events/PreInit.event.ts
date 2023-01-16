const orbit = require('@tokio-js/orbit');
export class PreInitEvent extends orbit.Event {
    constructor() {
        super("TOKIO.PreInitEvent");
    }
}