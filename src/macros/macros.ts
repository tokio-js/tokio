import { MacrosType } from "../types/macros";

export var M: typeof MacrosType = {
    $New(name: string, f: () => void): void {
        globalThis["__tokio_internal_$New"](name,f,undefined);
    },
    _: {}
};

globalThis["__tokio_internal_$New"]=(n:string,f:Function,o?:object)=>{
    Object.defineProperty(o?undefined:globalThis,"_"+n+"$",{value:f});
    const{L}=require("../log/log");
    L._trace$("Created macro: "+n)
};
Object.defineProperty(M,"_",{
    set(v:string){
        const{L}=require("../log/log");
        try{
            L._trace$("Executing macro: "+v);
            return(globalThis["_"+v+"$"])()
        }catch(e){
            L._error$(e)
        }
    }
});