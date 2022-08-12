import { IState } from "./IState";

export class State1 implements IState{
    onClick = () : void => {
        console.log("click handled in state 1 class")
    }
}