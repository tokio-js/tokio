import { Event } from 'orbit';
export class PreInitEvent extends Event {
    constructor() {
        super("TOKIO.PreInitEvent");
    }
}