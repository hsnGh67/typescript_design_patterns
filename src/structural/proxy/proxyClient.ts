import { BookLib } from "./BookLib"
import { BookLibProxy } from "./BookLibProxy"

export const proxyClient = ()=>{
    const bookLib = new BookLib()
    const bookProxyLib = new BookLibProxy(bookLib)

    bookProxyLib.getList()
    bookProxyLib.showInfo("1")
    bookProxyLib.showBook("1")
    bookProxyLib.showBook("1")
    bookProxyLib.getList()
}