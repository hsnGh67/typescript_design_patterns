import { Walk } from "./ConcreteStrategy1"
import { Run } from "./ConcreteStrategy2"
import { MoveController } from "./StrategyContext"

export const strategyClient = ()=>{
    const walking = new Walk()
    const running = new Run()
    const moveHandler = new MoveController()

    moveHandler.hanldeMove(walking)
    moveHandler.hanldeMove(running)
}