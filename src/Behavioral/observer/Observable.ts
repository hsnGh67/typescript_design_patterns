import { IObservable } from "./IObservable";
import { IObserver } from "./IObserver";

export class Observable implements IObservable{
    observers : IObserver[] = []
    data : string = ""

    setData(data : string){
        this.data = data
        this.notify()
    }

    register(observer : IObserver): void {
        this.observers.push(observer)
    }

    unregister(observer : IObserver): void {
        const index = this.observers.findIndex( o =>o.name === observer.name)

        this.observers.splice(index , 1)
    }

    notify(): void {
        this.observers.map(observer => observer.notify(this.data))
    }
}