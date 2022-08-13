import { Handler } from "./Handler";

export class HandlerA extends Handler{

    constructor(nextHandler : Handler | null){
       super(nextHandler)
    }

    protected doHandle(): boolean {
        console.log("in Handler A")
        return true
    }

}