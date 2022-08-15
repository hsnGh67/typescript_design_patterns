import { MacDialog } from "./MacDialog"
import { WindowsDialog} from "./WindowsDialog"

export const factoryMethodClient = ()=>{
    const windowsDialog : WindowsDialog = new WindowsDialog()
    const macDialog = new MacDialog()

    windowsDialog.render()
    macDialog.render()
}