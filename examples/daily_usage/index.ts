import tokiojs from "../../src/lib";
const { L, M, OOP, app } = tokiojs.load();


app.main = async () => {
    L._info$(`Hello World!`);
}


app.run();