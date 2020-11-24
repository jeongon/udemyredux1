import { Action } from "../ngrx-fake/ngrx";
import { decrementadorAction, incrementadorAction, multiplicarAction, resetAction } from "./contador.actions";



export function contadorReducer(state=10, action:Action ){


    switch (action.type ){
        case incrementadorAction.type:
            return state+=1;
            case decrementadorAction.type:
                return state-=1;
            case multiplicarAction.type:
                return state * action.payload;
            case resetAction.type:
                return state =0;
        default: 
            return state;
    }

}