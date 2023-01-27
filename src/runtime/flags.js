"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.unsubscribe = exports.subscribe = void 0;
const tokio_1 = require("../tokio");
let FLAGS = [{
        id: "__TOKIO_FLAG__",
        enabled: false,
        onEnable() { },
        updateValue(value) { },
    }];
function subscribe(flag) {
    flag.id = flag.id.toUpperCase();
    FLAGS.push(flag);
}
exports.subscribe = subscribe;
function unsubscribe(id) {
    id = id.toUpperCase();
    for (let i = 0; i < FLAGS.length; i++) {
        if (FLAGS[i].id === id) {
            FLAGS.splice(i, 1);
            return;
        }
    }
}
exports.unsubscribe = unsubscribe;
function register() {
    let cflag;
    for (let i = 0; i < FLAGS.length; i++) {
        if (FLAGS[i].id === "__TOKIO_FLAG__")
            continue;
        cflag = FLAGS[i];
        Object.defineProperty(tokio_1.Tokio["FLAGS"], cflag.id, {
            set(v) {
                cflag.updateValue(v);
                if (cflag.enabled) {
                    cflag.onEnable();
                }
            },
            get() {
                return cflag.enabled;
            },
        });
    }
    FLAGS = [{
            id: "__TOKIO_FLAG__",
            enabled: false,
            onEnable() { },
            updateValue(value) { },
        }];
}
exports.register = register;
