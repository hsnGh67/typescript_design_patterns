import { IIterator } from "./IIterator";

export class IteratorB implements IIterator<number>{
    items : number[]
    index : number

    constructor(items : number[]){
        this.items = items
        this.index = 0
    }

    hasNext(): boolean {
        
        return this.index < this.items.length
    }
    
    get() : number {
        if(this.hasNext()){
            return this.items[this.index++]
        }

        return this.items[this.index - 1]
    }
}