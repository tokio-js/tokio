export function __inject(name: string, f: Function, obj: object) {
    Object.defineProperty(obj, "_" + name + "$", { value: f });
}