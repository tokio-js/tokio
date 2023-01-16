const path = require("path");
const fs = require("fs");


const PATH = path.join(__dirname, "..");
const { spawnSync } = require('child_process');


let tsc = (()=>{
    if(process.platform === "win32"){
        console.log("Building TypeScript... (Windows)");
        return spawnSync("npm.cmd", ["exec", "-c", "tsc"], {
            cwd: PATH,
            env: process.env
        });
    } else {
        console.log("Building TypeScript...");
        return spawnSync("npm", ["exec", "-c", "tsc"], {
            cwd: PATH,
            env: process.env
        });
    }
})();
if(tsc.status == 0){
    console.log("TypeScipt Built Successfully!");
} else {
    console.log("TypeScript Build Failed!");
    console.log(tsc.stdout.toString());
    process.exit(2);
}


function move_dir_recursive(oldPath, newPath) {
    if(!fs.existsSync(newPath)){
        fs.mkdirSync(newPath, { recursive: true });
    }
    fs.readdirSync(oldPath, { withFileTypes: true }).forEach(file => {
        if(file.isFile()){
            fs.renameSync(
                path.join(oldPath, file.name),
                path.join(newPath, file.name)
            );
        } else if(file.isDirectory()){
            move_dir_recursive(
                path.join(oldPath, file.name),
                path.join(newPath, file.name)
            );
        }
    });
    fs.rmSync(oldPath, { recursive: true, force: true }, (e) => {
        if(e) console.warn(e);
    });
}
console.log("Moving Files...");
move_dir_recursive(
    path.join(PATH, "build"),
    path.join(PATH, ".turbo", "build")
);
console.log("Files Moved Successfully!");
console.log("Packaging...");
console.log("Done!");
