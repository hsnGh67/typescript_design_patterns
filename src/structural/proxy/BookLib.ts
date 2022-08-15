import { IBook } from "./IBook";
import { BookInfo, IBookLib } from "./IBookLib";

export class BookLib implements IBookLib{
    bookList : IBook[] = []
    getList(): BookInfo[] {
        console.log("get book list in real class")
        return getListFromWebServer()
    }

    showInfo(id: string): string {
        console.log("show info in real class")
        return this.bookList.find(item => item.id === id)?.info as string
    }

    showBook(id: string): IBook {
        console.log(`show book ${id} in real class`)
        return getDetailFromWebServer(id) as IBook
    }
}

const getListFromWebServer = ()=>{
    return [
        {id : "1" , info : "book 1 info"} , 
        {id : "2" , info : "book 2 info"} 
    ]
}

const getDetailFromWebServer = (id : string)=>{
    const books = [
        {id : "1" , info : "book 1 info" , detail : "book 1 detail"} , 
        {id : "2" , info : "book 2 info" , detail : "book 2 detail"} 
    ]

    return books.find(book => book.id === id)
}