import { FilterAdapter } from "./3rdPartyAdapter"
import { TwilightFilter } from "./3rdPartyFilterLib"
import { IFilter } from "./IFilter"
import { VividFilter } from "./VividFilter"

export const adapterClient = ()=>{
    let img = "img"
    const filters : IFilter[] = [] 
    filters.push(new VividFilter())
    filters.push(new FilterAdapter())
    filters.map(filter => filter.apply(img))
}