import { Event } from '@tokio-js/orbit';
export class PreInitEvent extends Event {
    constructor() {
        super("TOKIO.PreInitEvent");
    }
}