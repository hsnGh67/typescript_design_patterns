import { IButton } from "./IButton";

export class MacButton implements IButton{
    onClick(): void {
        console.log("Mac Button clicked")
    }
}