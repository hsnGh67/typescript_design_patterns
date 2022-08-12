import { IIterator } from "./IIterator"
import { IteratorA } from "./IteratorA"
import { IteratorB } from "./IteratorB"

export const IteratorClient = ()=>{
    const numbers = [1,2,3,4,5]
    const strings = ["a","b","c","d","e"]

    iterate(new IteratorA(strings))
    iterate(new IteratorB(numbers))
}

const iterate = (iterator : IIterator)  =>{
    while(iterator.hasNext()){
        console.log("item : " , iterator.get())
    }
}