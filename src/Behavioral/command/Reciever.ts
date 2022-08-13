import { ICommand } from "./ICommand";

export class Reciecver {
    protected command : ICommand

    constructor(command : ICommand){
        this.command = command
    }

    execute(){
        this.command.execute()
    }
}