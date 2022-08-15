import { IDevice } from "./IDevice";

export class Sony implements IDevice{
    turnOff(): void {
        console.log("Sony device : turnOff")
    }

    turnOn(): void {
        console.log("Sony device : turnOn")
    }

    changedChannel(): void {
        console.log("Sony device : changedChannel")
    }
}