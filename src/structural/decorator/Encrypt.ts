import { IStream } from "./IStream";

export class Encrypt implements IStream{
    nextStep : IStream | null

    constructor(nextStep : IStream | null){
        this.nextStep = nextStep
    }

    execute(request: string): void {
        console.log("Encrypting data => #@%$%%&@GFE@FD^*FQDS@" )
        if(this.nextStep)
            this.nextStep.execute("#@%$%%&@GFE@FD^*FQDS@")
    }
}