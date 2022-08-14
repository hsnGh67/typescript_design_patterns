import { Box } from "./Box"
import { Device } from "./Device"

export const  compositeClient = ()=>{
    const box1 = new Box([])
    box1.add(new Device(100))
    box1.add(new Device(70))
    box1.add(new Device(40))

    const box2 = new Box([])
    box2.add(new Device(30))
    box2.add(new Device(50))
    box2.add(new Device(120))

    const box3 = new Box([box1 , box2])
    box3.add(new Device(500))
    box3.add(new Device(700))

    console.log("box1 total value is => " , box1.getPrice())
    console.log("box2 total value is => " , box2.getPrice())
    console.log("box3 total value is => " , box3.getPrice())
}

