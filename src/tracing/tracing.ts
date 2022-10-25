

export = {
    __format: (m: any, level: string, color: string, colorend: string, file: string[], rn: Date): string[] => {
        return [
            `${t.d(rn)} ${t.f(file[0])} ${level} ${t.m(m, color, colorend)}`,
            `${t.d(rn)} ${t.f(file[1])} ${level} '${m}'`
        ]
    },

    __trace: (): string[] => {
        try {
            throw new Error()
        } catch (e) {
            const arr: string[] = e.stack.replace(/  /g, "").split(/\n/g);
            const len = arr.length;
            let line: string = "";
            let trc = arr[3].split("(")[1].split(")")[0];
            // console.warn(arr)
            for(let i=0;i<len;i++){
                if(arr[i].startsWith("at Object.<anonymous>")){
                    line = arr[i].split("(")[1].split(")")[0];
                    return [line, trc];
                }
            }
            return ["",""];
        }
    }
};

const t = {
    f: (file: string) => {
        return "[" + file + "]"
    },

    m: (m: any, color: string, colorend: string) => {
        return "" + color + m + colorend
    },

    d: (rn: Date) => {
        return "" + rn.getDate() + "/" + (rn.getMonth() + 1) + "/" + rn.getFullYear() + ":" + rn.getHours() + ":" + rn.getMinutes() + ":" + rn.getSeconds() + "." + rn.getMilliseconds()
    }
}