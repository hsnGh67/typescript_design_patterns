import { IButton } from "./IButton";
import { ITextField } from "./ITextField";

export interface AbstractFactory{
    createButton() : IButton;
    createTextField() : ITextField
}