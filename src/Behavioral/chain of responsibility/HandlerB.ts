import { Handler } from "./Handler";

export class HandlerB extends Handler{

    constructor(nextHandler : Handler | null){
       super(nextHandler)
    }

    protected doHandle(): boolean {
        console.log("in Handler B")
        return true
    }

}