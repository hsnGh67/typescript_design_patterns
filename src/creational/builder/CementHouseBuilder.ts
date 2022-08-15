import { IHouseBuilder } from "./IBuilder"

export class CementHouseBuilder implements IHouseBuilder{
    createDoor(): void {
        console.log("door created by cement")
    }

    createPool(): void {
        console.log("pool created by cement")
    }

    createStairs(): void {
        console.log("stairs created by cement")
    }

    createWindow(): void {
        console.log("window created by cement")
    }
}