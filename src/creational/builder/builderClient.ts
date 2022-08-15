import { CementHouseBuilder } from "./CementHouseBuilder"
import { IHouseBuilder } from "./IBuilder"
import { WoodHouseBuilder } from "./WoodHouseBuilder"

export const builderClient = ()=>{
    let builder : IHouseBuilder = new WoodHouseBuilder()

    builder.createDoor()
    builder.createPool()
    builder.createStairs()
    builder.createWindow()
    
    builder = new CementHouseBuilder()
    
    builder.createDoor()
    builder.createPool()
    builder.createStairs()
    builder.createWindow()
}