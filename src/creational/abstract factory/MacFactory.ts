import { AbstractFactory } from "./AbstractFactory";
import { IButton } from "./IButton";
import { ITextField } from "./ITextField";
import { MacButton } from "./MacButton";
import { MacTextField } from "./MacTextField";

export class MacFactory implements AbstractFactory{
    createButton(): IButton {
        console.log("Mac button clicked")
        return new MacButton()
    }

    createTextField(): ITextField {
        console.log("Mac text changed")
        return new MacTextField()
    }
}