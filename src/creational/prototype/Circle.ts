import { IShape } from "./IShape";

export class Circle implements IShape{
    private radius : number = 0;

    setRadius(radius : number):void{
        this.radius = radius
    }

    getRadius():number{
        return this.radius
    }

    render(): void {
        console.log("render a circle with radius of " + this.radius)
    }

    clone(): IShape {
        const newCircle = new Circle()
        newCircle.setRadius(this.radius)
        return newCircle
    }
}