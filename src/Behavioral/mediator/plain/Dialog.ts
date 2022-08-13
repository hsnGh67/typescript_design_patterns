import { Button } from "./Button";
import { IDialog } from "./IDialog";
import { TextBox } from "./TextBox";
import { UIController } from "./UIController";

export class Dialog implements IDialog{
    button = new Button(this)
    textbox = new TextBox(this)

    changed(el: UIController): void {
        if(el === this.textbox){
            if(this.textbox.content !== ""){
                this.button.isEnable = true
            }else{
                this.button.isEnable = false
            }
        }
    }

    simulateInteraction(){
        console.log("textbox content => " , this.textbox.content)
        console.log("button isEnable => " , this.button.isEnable)

        this.textbox.content = "hello"
        console.log("textbox content => " , this.textbox.content)
        console.log("button isEnable => " , this.button.isEnable)

    }
}