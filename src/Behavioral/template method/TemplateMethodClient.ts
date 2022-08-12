import { CalcCostByPlanA } from "./CalcCostByPlanA"
import { CalcCostByPlanB } from "./CalcCostByPlanB"
import { IGood } from "./CalculateCost"

export const TemplateMethodClient = ()=>{
    const goods : IGood[] = [
        {
            name : "banana",
            price : 12000
        },
        {
            name : "apple",
            price : 2500
        }
    ]

    const planA = new CalcCostByPlanA(goods)
    const planB = new CalcCostByPlanB(goods)

    planA.getFinalPrice()
    planB.getFinalPrice()
}