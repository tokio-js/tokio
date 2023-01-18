import tokiojs from "../../.turbo/build/lib";
const { M, L } = tokiojs.load();

M.$New("Hello World!",()=>{
    L._info$("Hello World!")
    L._info$("Hello World!")
});

M._ = "Hello World!";