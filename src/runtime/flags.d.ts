interface Flag {
    id: string;
    enabled: boolean;
    onEnable: () => void;
    updateValue: (value: any) => void;
}
export declare function subscribe(flag: Flag): void;
export declare function unsubscribe(id: string): void;
export declare function register(): void;
export {};
