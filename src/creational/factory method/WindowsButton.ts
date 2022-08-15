import { IButton } from "./IButton";

export class WindowsButton implements IButton{
    onClick(): void {
        console.log("Windows Button clicked")
    }
}