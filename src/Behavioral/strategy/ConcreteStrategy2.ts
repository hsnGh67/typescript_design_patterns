import { IMove } from "./IMove";

export class Run implements IMove{
    move(): void {
        console.log("Running")
    }
}