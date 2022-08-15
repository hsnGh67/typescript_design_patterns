import { BasedRemote } from "./BasedRemote";
import { IDevice } from "./IDevice";

export class AdvancedRemote extends BasedRemote{
    constructor(device : IDevice){
        super(device)
    }

    changeChannel() : void{
        this.device.changedChannel()
    }
}