import { Observable } from "./Observable"
import { Observer } from "./Observer"

export const observerClient = ()=>{
    let Subject = new Observable()
    let observer1 = new Observer(Subject , "observer1")
    let observer2 = new Observer(Subject , "observer2")

    Subject.setData("data 1")
    Subject.setData("data 2")
}