import { Event } from '@tokio-js/orbit';
export class InitEvent extends Event {
    constructor() {
        super("TOKIO.InitEvent");
    }
}