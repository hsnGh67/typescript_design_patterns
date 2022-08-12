import { IState } from "./IState"
import { State1 } from "./state1"
import { State2 } from "./state2"

export const client = ()=>{
    let state : IState

    const state1 = new State1()
    const state2 = new State2()

    state = state1

    state1.onClick()
    state2.onClick()

}