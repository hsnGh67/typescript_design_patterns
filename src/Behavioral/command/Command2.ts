import { ICommand } from "./ICommand";

export class Command2 implements ICommand{
    execute(): void {
        console.log("execute command 2")
    }
}