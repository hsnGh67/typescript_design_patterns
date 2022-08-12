import { Memento } from "./Memento";

export class Caretaker {
    history : Memento[];
    index : number;

    constructor(initState : Memento = {title : "" , description : ""}){
        this.history = [initState]
        this.index = 0
    }

    push = (memento : Memento) : void =>{
        this.history.push(memento)
        this.index++
    }

    pop = () : Memento =>{
        if(this.index > 0){
            this.index--
            return this.history[this.index]
        }

        return this.history[0]
    }

}