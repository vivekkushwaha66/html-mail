export interface IDictionary<T> {
    key: string;
    value: T;

    checkKeyExists(key): boolean;
    getKeys(): string[];
    getValue(key:string): T;
}