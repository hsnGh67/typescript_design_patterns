import { IDialog } from "./IDialog"

export class UIController {
    owner : IDialog
    constructor(owner : IDialog) {
        this.owner = owner
    }
}