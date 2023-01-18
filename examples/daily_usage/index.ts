import tokiojs from "../../.turbo/build/lib";
const { L, M, OOP, app } = tokiojs.load();

app.main = async () => {
    L._info$(`Hello World!`);
}

app.run();
app.run();