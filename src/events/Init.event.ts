import { Event } from 'orbit';
export class InitEvent extends Event {
    constructor() {
        super("TOKIO.InitEvent");
    }
}