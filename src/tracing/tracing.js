"use strict";
const t = {
    f: (file) => {
        return "[" + file + "]";
    },
    m: (m, color, colorend) => {
        return "" + color + m + colorend;
    },
    d: (rn) => {
        return "" + rn.getDate() + "/" + (rn.getMonth() + 1) + "/" + rn.getFullYear() + ":" + rn.getHours() + ":" + rn.getMinutes() + ":" + rn.getSeconds() + "." + rn.getMilliseconds();
    }
};
module.exports = {
    __format: (m, level, color, colorend, file, rn) => {
        return [
            `${t.d(rn)} ${t.f(file)} ${level} ${t.m(m, color, colorend)}`,
            `${t.d(rn)} ${t.f(file)} ${level} ${m}`
        ];
    },
    __trace: () => {
        try {
            throw new Error();
        }
        catch (e) {
            let arr = e.stack.replace(/\n/g, "").replace(/  /g, "").split("at");
            for (let line = 0; line < arr.length; line++) {
                if (arr[line].startsWith(" Object.<anonymous>")) {
                    return "" + arr[line].replace(" ", "").split(" ")[1].replace("(", "").replace(")", "").replace(/\n/g, "");
                }
            }
        }
    }
};
