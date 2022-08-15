import { Dialog } from "./Dialog";
import { IButton } from "./IButton";
import { WindowsButton } from "./WindowsButton";

export class WindowsDialog extends Dialog{
    protected createButton(): IButton {
        return new WindowsButton()
    }
}