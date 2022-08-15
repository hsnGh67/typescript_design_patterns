import { Circle } from "./Circle"

export const prototypeClient = ()=>{
    const circle1 = new Circle()
    circle1.setRadius(1.5)

    const circle2 = circle1.clone()

    circle1.render()
    circle2.render()
}