import { ITextField } from "./ITextField";

export class WindowsTextField implements ITextField{
    setText(): void {
        console.log("Windows text changed")
    }
}