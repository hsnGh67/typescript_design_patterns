import { IBook } from "./IBook";

export interface IBookLib{
    getList() : BookInfo[];
    showInfo(id : string) : string;
    showBook(id : string) : IBook;
}

export type BookInfo = {
    id : string;
    info : string;
}