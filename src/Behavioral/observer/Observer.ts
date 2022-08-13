import { IObservable } from "./IObservable";
import { IObserver } from "./IObserver";

export class Observer implements IObserver{

    name : string

    constructor(observable : IObservable , name : string){
        observable.register(this)
        this.name = name
    }

    notify(data : string): void {
        console.log(
            `OBSERVER_${this.name} received ${data}`
        )
    }
}