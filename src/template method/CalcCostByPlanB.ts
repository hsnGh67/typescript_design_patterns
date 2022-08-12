import { CalculateCost } from "./CalculateCost";

export class CalcCostByPlanB extends CalculateCost{
    protected calcDiscount(): number {
        console.log("discount calculated by plan B")

        return this.totalPrice * 0.2
    }
}