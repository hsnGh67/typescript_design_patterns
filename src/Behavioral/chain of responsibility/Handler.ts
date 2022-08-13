export abstract class Handler{
    protected nextHandler : Handler | null

    constructor(nextHandler : Handler | null){
        this.nextHandler = nextHandler
    }

    handle(){
        if(this.doHandle() && this.nextHandler){
            console.log("proccess succeed")
            this.nextHandler.handle()
        }else{
            console.log("process stoped")
        }
    }

    protected abstract doHandle() : boolean;

}