export interface IGood {
    name : string;
    price : number;
}

export abstract class CalculateCost {
    protected goods : IGood[]
    protected totalPrice : number

    constructor(goods : IGood[]){
        this.goods = goods
        this.totalPrice = 0
    }

    protected calcTotalPrice(){
        this.goods.map(good => this.totalPrice += good.price)

        return this.totalPrice
    }

    protected abstract calcDiscount() : number

    getFinalPrice():number{
        const p = this.calcTotalPrice() -  this.calcDiscount()
        console.log(`Final price is ${p}`)
        return p
    }
}