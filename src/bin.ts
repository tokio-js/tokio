var SHOULD_LOAD: boolean = true;


export function set(load: boolean): void {
    SHOULD_LOAD = load;
}
export function get(): boolean {
    return SHOULD_LOAD; 
}


export function load(): any {
    if(get()) return require("../bin/rust");
    class CoreLog {
        public corelog(_: any): void {}
        public toplog(_: any): void {}
    }
    return { CoreLog: CoreLog };
}