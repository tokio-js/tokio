import tokiojs from "../../src/lib";
const { M, L } = tokiojs.load();

M.$New("Hello World!",()=>{
    L._info$("Hello World!")
});

M._ = "Hello World!";