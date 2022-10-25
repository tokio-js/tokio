# TSTools
## Useful Tools for Typescript
### Examples: [./examples](./examples/README.md)
### Tools Included:

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

### Examples:

```js
require("ts-tools")();

_main$ = () => {
  console.log("Hello World effgmwgwemg")
};
```

```ts
import tst from "ts-tools";
const { app, L } = tst();

app._main$ = async function(args: string[]) {
  L._info$("Hello World")
};

app.run();
```
