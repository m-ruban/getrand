declare module '*.png' {
    const value: never;
    export = value;
}
declare module '*.less' {
    const resource: { [key: string]: string };
    export = resource;
}
