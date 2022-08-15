import { IButton } from "./IButton";
import { MacButton } from "./MacButton";

export abstract class Dialog{
    constructor(){}

    render(){
        const btn = this.createButton()
        btn.onClick()
    }

    protected abstract createButton() : IButton
}