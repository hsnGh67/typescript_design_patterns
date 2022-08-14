import { IFilter } from "./IFilter";

export class VividFilter implements IFilter{
    apply(img: string): string {
        img = `${img} [Vivid Filter]`
        console.log(img )

        return img
    }
}