import { TwilightFilter } from "./3rdPartyFilterLib";
import { IFilter } from "./IFilter";

export class FilterAdapter implements IFilter{
    apply(img: string): string {
        const TF = new TwilightFilter()
        TF.init(img)
        img = TF.doFilter() as string

        return img
    }
}