import { IDialog } from "./IDialog";
import { UIController } from "./UIController";

export class Button extends UIController{
    private _isEnable : boolean = false

    constructor(Dialog : IDialog){
        super(Dialog)
    }

    public set isEnable(v : boolean) {
        this._isEnable = v;
    }
    
    public get isEnable(){
        return this._isEnable
    }

}