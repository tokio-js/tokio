import tokiojs from "../../src/lib";
const { M } = tokiojs.load();

M.$New("Hello World!",()=>{
    console.log("Hello World!")
});

M._ = "Hello World!";