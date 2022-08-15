import { AdvancedRemote } from "./AdvancedRemote"
import { BasedRemote } from "./BasedRemote"
import { Samsung } from "./Samsung"
import { Sony } from "./Sony"

export const bridgeClient = ()=>{
    let baseControl = new BasedRemote(new Sony())
    baseControl.turnOn()
    baseControl.turnOff()

    baseControl = new BasedRemote(new Samsung())
    baseControl.turnOn()
    baseControl.turnOff()
    
    let advancedRemote = new AdvancedRemote(new Sony())
    advancedRemote.turnOn()
    advancedRemote.turnOff()
    advancedRemote.changeChannel()

    advancedRemote = new AdvancedRemote(new Samsung())
    advancedRemote.turnOn()
    advancedRemote.turnOff()
    advancedRemote.changeChannel()
}