import { ICommand } from "./ICommand";

export class Command1 implements ICommand{
    execute(): void {
        console.log("execute command 1")
    }
}