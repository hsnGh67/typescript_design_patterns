import { IObservable } from "./IObservable";

export interface IObserver{
    name : string;
    notify(args : string):void;
}