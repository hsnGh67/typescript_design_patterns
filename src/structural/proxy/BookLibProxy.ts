import { IBook } from "./IBook";
import { BookInfo, IBookLib } from "./IBookLib";

export class BookLibProxy implements IBookLib{
    private bookInfoCache : BookInfo[] = []
    private bookListCache : IBook[] = []
    private bookLib : IBookLib

    constructor(bookLib : IBookLib) {
        this.bookLib = bookLib
    }

    getList(): BookInfo[] {
        if(this.bookInfoCache.length !== 0){
            console.log("get book list in proxy class")
        }
        else{
            this.bookInfoCache = this.bookLib.getList()
        }

        return this.bookInfoCache
    }

    showInfo(id: string): string {
        console.log("show info from proxy class")
        return this.bookInfoCache.find(item => item.id === id)?.info as string
    }

    showBook(id: string): IBook {
        if(this.bookListCache.find(item => item.id === id)){
            console.log("show book from proxy class")
            return this.bookListCache.find(item => item.id === id) as IBook
        }
        this.bookListCache.push(this.bookLib.showBook(id))

        return this.bookLib.showBook(id)
    }
}