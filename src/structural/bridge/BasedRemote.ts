import { IDevice } from "./IDevice";

export class BasedRemote {
    
    protected device : IDevice

    constructor(device : IDevice){
        this.device = device
    }

    turnOn(): void{
        this.device.turnOn()
    }

    turnOff(): void{
        this.device.turnOff()
    }
}