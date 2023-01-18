## Build Instructions

### Prerequisites

- [NodeJS](https://nodejs.org) `v16.0.0+`
- [Rust](https://rustup.rs) `v1.55.0+` (If you are bulding [corelog](https://github.com/tokio-js/corelog))
- [TurboRepo](https://turbo.build/) `v1.5.0+`

### Building

```sh
# Install source code
git clone https://github.com/tokio-js/tokio
cd tokio

# Check if you have the correct version of dependencies
node --version
rustc --version
turbo --version

# Run the build script
node builder.js
turbo build
npm run cli -- --diagnose

# if you see 'Diagnose success !' then you are good to go
# delete the 'builder.js' file by running:
rm builder.js
```
