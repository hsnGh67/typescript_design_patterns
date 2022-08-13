import { Handler } from "./Handler";

export class HandlerC extends Handler{

    constructor(nextHandler : Handler | null){
       super(nextHandler)
    }

    protected doHandle(): boolean {
        console.log("in Handler C")
        return false
    }

}