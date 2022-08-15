import { IHouseBuilder } from "./IBuilder";

export class WoodHouseBuilder implements IHouseBuilder{
    createDoor(): void {
        console.log("door created by wood")
    }

    createPool(): void {
        console.log("pool created by wood")
    }

    createStairs(): void {
        console.log("stairs created by wood")
    }

    createWindow(): void {
        console.log("window created by wood")
    }
}