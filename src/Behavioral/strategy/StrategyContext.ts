import { IMove } from "./IMove";

export class MoveController {
    hanldeMove(moveType : IMove){
        moveType.move()
    }
}