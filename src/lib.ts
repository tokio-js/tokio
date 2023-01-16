import { init } from "./runtime/init";
init();// loads internals

// Exports the Tokio object
import { Tokio } from "./tokio";
export = Tokio;