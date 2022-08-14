import { IStream } from "./IStream";

export class Compress implements IStream{
    nextStep : IStream | null

    constructor(nextStep : IStream | null){
        this.nextStep = nextStep
    }

    execute(request: string): void {
        console.log("Compressing data => " , request.slice(0 , 10))
        if(this.nextStep)
            this.nextStep.execute(request.slice(0 , 10))
    }
}