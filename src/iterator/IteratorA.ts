import { IIterator } from "./IIterator";

export class IteratorA implements IIterator<string>{
    items : string[]
    index : number

    constructor(items : string[]){
        this.items = items
        this.index = 0
    }

    hasNext(): boolean {
        
        return this.index < this.items.length
    }
    
    get() : string {
        if(this.hasNext()){
            return this.items[this.index++]
        }

        return this.items[this.index - 1]
    }
}