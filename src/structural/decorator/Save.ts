import { IStream } from "./IStream";

export class Save implements IStream{
    nextStep : IStream | null

    constructor(nextStep : IStream | null){
        this.nextStep = nextStep
    }

    execute(request : string): void {
        console.log("saving data => " , request)
        if(this.nextStep)
            this.nextStep.execute(request)
    }
}