import { HandlerA } from "./HandlerA"
import { HandlerB } from "./HandlerB"
import { HandlerC } from "./HandlerC"

export const chainClient = ()=>{
    const h3 = new HandlerC(null)
    const h2 = new HandlerB(h3)
    const h1 = new HandlerA(h2)

    h1.handle()
}