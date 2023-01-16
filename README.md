# TokioJS

## JavaScript's asynchronous runtime

### [Examples](./examples/)

### Tools Included

* Macros
  * Easy to create
  * Auto-added to global scope
  * Can be used cross-file
  * Used in 99% of the tools
* Logging
  * Default Built-in Loggers (`ConsoleLogger` and `IOLogger`)
    * [**CoreLog**](./doc/CoreLog.md)
    * SAFE function caller tracer
    * rust bindings for logging EVERYTHING (W.I.P)
  * Fully Customizable Loggers
* OOP
  * Structs
  * Templates
  * Builders
  * Advanced Contructors

### Example (TS)

```ts
import tokiojs from "@tokio-js/tokio";
const { app, L } = tokiojs.load();

app._main$ = async function(args: string[]) {
  L._info$("Hello World")
};

app.run();
```
