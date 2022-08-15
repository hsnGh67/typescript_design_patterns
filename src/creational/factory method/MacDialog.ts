import { Dialog } from "./Dialog";
import { IButton } from "./IButton";
import { MacButton } from "./MacButton";

export class MacDialog extends Dialog{

    protected createButton(): IButton {
        return new MacButton()
    }
}