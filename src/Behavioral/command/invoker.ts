import { Command1 } from "./Command1"
import { Command2 } from "./Command2"
import { Reciecver } from "./Reciever"

export const commandInvoker = ()=>{
    const cmd1 = new Command1()
    const cmd2 = new Command2()
    const reciver1 = new Reciecver(cmd1)
    const reciver2 = new Reciecver(cmd2)

    reciver1.execute()
    reciver2.execute()
}