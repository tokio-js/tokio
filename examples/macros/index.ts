import tst from "../../src/lib";
const { M } = tst();

function hw() {
    console.log("Hello World!");
    console.log("Test")
};

function premain() {
    hw()
}

function main(){
    premain()
}

main();