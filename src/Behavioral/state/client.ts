import { IState } from "./IState"
import { State1 } from "./State1"
import { State2 } from "./State2"

export const stateClient = ()=>{
    let state : IState

    const state1 = new State1()
    const state2 = new State2()

    state = state1

    state1.onClick()
    state2.onClick()

}