import { IMove } from "./IMove";

export class Walk implements IMove{
    move(): void {
        console.log("Walking")
    }
}