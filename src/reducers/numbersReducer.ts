import { Action, ActionType } from "../interfaces";

const initialState = {
    looking: false,
    error: false,
    numbers: []
}

function numbersReducer(state = initialState, action: Action){    
    switch (action.type){
        case ActionType.LOOKING_FOR_MISTAKES:
            return{
                ...state,
                looking: true,
                error: false
            }
        case ActionType.NO_MISTAKES:
            return {
                ...state,
                looking: false,
                error: false,
                numbers: action.data
            };
        case ActionType.THERE_ARE_MISTAKES:
            return {
                ...state,
                looking: false,
                error: true,
            };
        default:
            return state
    }
}

export default numbersReducer;