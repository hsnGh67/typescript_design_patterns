import { SingleQueue } from "./SingleQueue"

export const singletonClient = ()=>{
    let queue1 = SingleQueue.getInstance()

    queue1.addToQueue("1st query")

    let queue2 = SingleQueue.getInstance()

    queue2.addToQueue("2nd query")

    console.log("queue1 => " ,  queue1)
    console.log("queue2 => " ,  queue2)
    console.log("queue1 === queue2 => " ,  queue1 === queue2)
}