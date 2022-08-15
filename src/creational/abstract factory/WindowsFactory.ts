import { AbstractFactory } from "./AbstractFactory";
import { IButton } from "./IButton";
import { ITextField } from "./ITextField";
import { WindowsButton } from "./WindowsButton";
import { WindowsTextField } from "./WindowsTextField";

export class WindowsFactory implements AbstractFactory{
    createButton(): IButton {
        console.log("windows button clicked")
        return new WindowsButton()
    }
    createTextField(): ITextField {
        console.log("windows text changed")
        return new WindowsTextField()
    }
}