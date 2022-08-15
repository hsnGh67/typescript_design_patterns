import { IDevice } from "./IDevice";

export class Samsung implements IDevice{
    turnOff(): void {
        console.log("Samsung device : turnOff")
    }

    turnOn(): void {
        console.log("Samsung device : turnOn")
    }

    changedChannel(): void {
        console.log("Samsung device : changedChannel")
    }
}