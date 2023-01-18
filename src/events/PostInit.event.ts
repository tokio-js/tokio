import { Event } from 'orbit';
export class PostInitEvent extends Event {
    constructor() {
        super("TOKIO.PostInitEvent");
    }
}