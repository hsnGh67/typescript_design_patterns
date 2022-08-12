import { IState } from "./IState";

export class State2 implements IState{
    onClick = () : void => {
        console.log("click handled in state 2 class")
    }
}