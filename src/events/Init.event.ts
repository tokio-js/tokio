const orbit = require('@tokio-js/orbit');
export class InitEvent extends orbit.Event {
    constructor() {
        super("TOKIO.InitEvent");
    }
}