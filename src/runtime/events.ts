import { PostInitEvent } from "../events/PostInit.event";
import { PreInitEvent } from "../events/PreInit.event";
import { InitEvent } from "../events/Init.event";
const orbit = require('@tokio-js/orbit');
export let BUS = new orbit.Bus();
export function __init() {
    PostInitEvent.link(BUS);
    PreInitEvent.link(BUS);
    InitEvent.link(BUS);
    const{_}=require("./preinit");_();
    BUS.post(new PreInitEvent());
}

