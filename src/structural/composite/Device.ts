import { IComponent } from "./IComponent";

export class Device implements IComponent{
    private price : number

    constructor(price : number){
        this.price = price
    }
    
    getPrice(): number {
        return this.price
    }
}