import { ICommand } from "./ICommand";

export class Button {
    onClick(command : ICommand){
        command.execute()
    }
}