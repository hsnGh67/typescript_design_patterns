import { AbstractFactory } from "./AbstractFactory"
import { MacFactory } from "./MacFactory"
import { WindowsFactory } from "./WindowsFactory"

export const abstractFactoryClient = ()=>{
    let OS = "Mac"
    let factory : AbstractFactory

    if(OS === "windows"){
        factory = new WindowsFactory()
    }else{
        factory = new MacFactory()
    }

    const btn = factory.createButton()
    const txtField = factory.createTextField()

    btn.onClick()
    txtField.setText()
}
