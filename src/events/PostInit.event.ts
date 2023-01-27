import { Event } from '@tokio-js/orbit';
export class PostInitEvent extends Event {
    constructor() {
        super("TOKIO.PostInitEvent");
    }
}