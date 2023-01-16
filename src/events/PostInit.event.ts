const orbit = require('@tokio-js/orbit');
export class PostInitEvent extends orbit.Event {
    constructor() {
        super("TOKIO.PostInitEvent");
    }
}