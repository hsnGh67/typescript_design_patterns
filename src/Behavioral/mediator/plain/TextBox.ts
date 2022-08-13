import { IDialog } from "./IDialog";
import { UIController } from "./UIController";

export class TextBox extends UIController{
    private _content : string = ""

    constructor(dialog : IDialog){
        super(dialog)
    }

    public set content(text : string){
        this._content = text
        this.owner.changed(this)
    }

    public get content():string{
        return this._content
    }
}