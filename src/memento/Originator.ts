import { Caretaker } from "./Caretaker"
import { Memento } from "./Memento"

const originator = ()=>{
    let state : Memento = {
        title : "",
        description : ""
    }

    const history = new Caretaker(state)

    state = {
        title : "a",
        description : "__a"
    }

    history.push(state)
    console.log("state => " , state)

    state = {
        title : "ab",
        description : "__ab"
    }

    history.push(state)
    console.log("state => " , state)

    state = {
        title : "abc",
        description : "__abc"
    }

    history.push(state)
    console.log("state => " , state)

    state = history.pop()
    console.log("state => " , state)
    state = history.pop()
    console.log("state => " , state)

    state = {
        title : "a",
        description : "__a"
    }

    history.push(state)
    console.log("state => " , state)
}

export { originator }