export interface IIterator<T = any>{
    items : T[];
    hasNext() : boolean;
    get() : T;
}