import { ITextField } from "./ITextField";

export class MacTextField implements ITextField{
    setText(): void {
        console.log("Mac text changed")
    }
}