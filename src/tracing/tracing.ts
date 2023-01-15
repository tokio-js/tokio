(()=>{
    globalThis["__tokio_internal_t"]=(()=>{return{
        f:(f:string)=>{return`[${f}]`},
        m:(m:string,c:string,e:string)=>{var FLAG=false;let res="";for(let i=0;i<m.length;i++){if(m[i]=='"'&&FLAG==true){FLAG=false;res+=`${c}"`}else if(m[i]=='"'&&FLAG==false){FLAG=true;res+="\"\u001b[38;5;56m"}else{res+=m[i]}}return`${c}${res}${e}`},
        d:(r:Date)=>{return`${r.getDate()}/${r.getMonth()+1}/${r.getFullYear()}:${r.getHours()}:${r.getMinutes()}:${r.getSeconds()}.${r.getMilliseconds()}`},
        l:(l:string)=>{let p="";if(l=="ERR"){p="\u001b[38;5;196m"}else if(l=="WRN"){p="\u001b[38;5;208m"}else if(l=="INF"){p="\u001b[38;5;34m"}else if(l=="DBG"){p="\u001b[38;5;31m"}else if(l=="TRC"){p="\u001b[38;5;242m"}return[p,"\u001b[0m"]}
    }})();
    globalThis["__tokio_internal_format"]=(m:any,l:string,_f:string[],r:Date):string[]=>{const message=new TraceMessage(r,m,l,_f);return[message.format("SIMPLE"),message.format("CORELOG"),message.format("TOPLOG")]};
    globalThis["__tokio_internal_trace"]=(_i:number)=>{
        _i=Math.abs(Math.floor(_i));
        try{
            try{
                throw new Error()
            }catch(e){
                const arr:string[]=e.stack.replace(/  /g,"").split(/\n/g);
                const len=arr.length;
                let line:string="";
                let trc=arr[3+_i].split("(")[1].split(")")[0];
                for(let i=0;i<len;i++){
                    if(arr[i].startsWith("at Object.<anonymous>")){
                        line=arr[i].split("(")[1].split(")")[0];
                        return[line,trc];
                    }
                }
                return["",""]
            }
        }catch(e){
            if(e instanceof TypeError){
                // try{
                //     throw new Error()
                // }catch(e){
                //     const arr:string[]=e.stack.replace(/  /g,"").split(/\n/g);
                //     let trc=arr[4].split("at ")[1];
                //     return[trc,trc]
                // }
            } else {
                console.error("Failed to trace, Error: " + e);
                return ["",""]
            }
        }
    };
    globalThis["__tokio_internal_msgformat"]=(t:Date,l:string,m:string,tc:string,ic:string,f?:"CORELOG"|"SIMPLE"|"TOPLOG"):string=>{let time=globalThis["__tokio_internal_t"].d(t);let r="";for(let i=0;i<23;i++){if(time[i]==undefined){r+=" ";}else{r+=time[i];}}if(f == "CORELOG"){return`| ${r} | ${l} | ${globalThis["__tokio_internal_t"].f(ic)} ${m}`}else if(f=="TOPLOG"){return`| ${r} | ${l} | ${tc} ${m}`}else{let colors=globalThis["__tokio_internal_t"].l(l);return`\u001b[38;5;14m${globalThis["__tokio_internal_t"].d(t)} ${colors[0]}${l}${colors[1]} ${globalThis["__tokio_internal_t"].m(m,TraceMessage.TextColorStart,TraceMessage.TextColorEnd)}`}}
})();

interface LogMessage {
    timestamp: number;
    message: string;
    level: string;
    file: {
        top_level_call: string;
        internal_call: string;
    }
}


/**
 * ## `TraceMessage`
 * A utility class for standardizing log messages.
 * Messages can be formated using the `format` method, to be used inside tokio's logging system.
 * Or they can be exported to other libraries, to then be processed there,
 */
export class TraceMessage {
    // true can sometimes break the console, so it is disabled by default
    private static COLORFUL = false;

    /**
     * ## `TextColorStart`
     * The starting color code for the message.
     * @returns {string} color code
     */
    public static TextColorStart: string = (()=>{if(TraceMessage.COLORFUL){return"\u001b[38;5;91m"}else{return""}})();

    /**
     * ## `TextColorEnd`
     * The ending color code for the message.
     * @returns {string} color code
     */
    public static TextColorEnd: string = (()=>{if(TraceMessage.COLORFUL){return"\u001b[0m"}else{return""}})();

    private time: Date;

    /**
     * message provided by the user
     */
    public message: string;

    /**
     * severity level of the message
     */
    public level: string;
    private internal_call: string;
    private top_level_call: string;
    constructor(time: Date, message: string, level: string, file: string[]){
        this.message = message;
        this.level = level;
        this.time = time;
        this.internal_call = file[1];
        this.top_level_call = file[0];
    }

    /**
     * ## `format`
     * formats a `TraceMessage` object into a string
     * @param {"CORELOG" | "SIMPLE" | "TOPLOG" | undefined} formater Formater to use, defaults to "SIMPLE"
     * @returns {string} formatted message
     */
    public format(formater?: "CORELOG" | "SIMPLE" | "TOPLOG"): string {
        return globalThis["__tokio_internal_msgformat"](
            this.time, this.level, this.message, this.top_level_call, this.internal_call, formater
        )
    }
    
    /**
     * ## `export` 
     * exports log message 
     * @returns {LogMessage} a log message object
     */
    public export(): LogMessage {
        return {
            timestamp: this.time.getTime(),
            message: this.message,
            level: this.level,
            file: {
                top_level_call: this.top_level_call,
                internal_call: this.internal_call
            }
        }
    }
}

/**
 * **`format`** \
 * Formats a loggable message. \
 * not to be confused with {@link TraceMessage.format `TraceMessage.format`}, which formats a {@link TraceMessage `TraceMessage`} object,
 * which can than be passed into here
 * @param {any} message message
 * @param {string} level log level
 * @param {string[]} files caller files, obtain via the public {@link trace `trace`} function
 * @param {Date} time current time
 * @returns {string[]} 3 formated strings
 * @example
 * ```ts
 * const [simple, corelog, toplog] = format("hello world", "INF", trace(), new Date());
 * ```
 */
export function format(message: any, level: string, files: string[], time: Date): string[] {
    return globalThis["__tokio_internal_format"](
        message, level, files, time
    );
}

/**
 * **`trace`** \
 * Traces a function call. \
 * Returns an array of two strings. \
 * The first string is the topmost function that called a lot of items in the call stack. \
 * The second string is the function that actually contained the call to `trace()`.
 * @param {number} [depth=1] depth of the call stack to trace
 * @returns {string[]} 2 strings, the first is the top level call, the second is the internal call
 * @example
 * ```ts
 * const [toplevel, internal] = trace();
 * ```
 */
export function trace(depth: number = 1): string[] {
    return globalThis["__tokio_internal_trace"](depth)
}
