import { IComponent } from "./IComponent";

export class Box implements IComponent{
    private contents : IComponent[]

    constructor(contents : IComponent[]){
        this.contents = contents
    }

    add(component : IComponent){
        this.contents.push(component)
    }

    getPrice(): number {
        let t = 0
        this.contents.map(item => t += item.getPrice())
        return t
    }
}