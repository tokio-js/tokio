import { Tokio } from "../tokio";

interface Flag {
    id: string;
    enabled: boolean;
    onEnable: () => void;
    updateValue: (value: any) => void;
}
let FLAGS: [ Flag ] = [{
    id: "__TOKIO_FLAG__",
    enabled: false,
    onEnable() {},
    updateValue(value) {},
}];

export function subscribe(flag: Flag): void {
    flag.id = flag.id.toUpperCase();
    FLAGS.push(flag);
}

export function unsubscribe(id: string): void {
    id = id.toUpperCase();
    for(let i=0;i<FLAGS.length;i++) {
        if(FLAGS[i].id===id) {
            FLAGS.splice(i,1);
            return;
        }
    }
}

export function register(): void {
    let cflag: Flag;
    for(let i=0;i<FLAGS.length;i++) {
        if(FLAGS[i].id==="__TOKIO_FLAG__") continue;
        cflag = FLAGS[i];
        Object.defineProperty(Tokio["FLAGS"],cflag.id,{
            set(v) {
                cflag.updateValue(v);
                if(cflag.enabled) {
                    cflag.onEnable();
                }
            },
            get(): boolean {
                return cflag.enabled;
            },
        });
    }
    FLAGS = [{
        id: "__TOKIO_FLAG__",
        enabled: false,
        onEnable() {},
        updateValue(value) {},
    }];
}
