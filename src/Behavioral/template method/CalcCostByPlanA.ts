import { CalculateCost } from "./CalculateCost";

export class CalcCostByPlanA extends CalculateCost{
    protected calcDiscount(): number {
        console.log("discount calculated by plan A")

        return this.totalPrice * 0.05
    }
}