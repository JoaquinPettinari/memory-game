import { Dispatch } from "redux"
import { Action, ActionFail, ActionPending, ActionSuccess, ActionType, NumbersWithState } from "../interfaces"

export const validateNumbers = (enteredNumber: string, randomNumber: string | undefined) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(lookingForMistakes())
        try{
            const enteredNumbersSplited = enteredNumber.split("")
            const randomNumbersSplited = randomNumber?.split("")
            const validatedNumberList: NumbersWithState = enteredNumbersSplited.map((number, index) => {
                return {
                    number: number,
                    error: number !== (randomNumbersSplited && randomNumbersSplited[index])
                }
            });
            dispatch(saveResults(validatedNumberList))
        }
        catch(error){
            dispatch(failLooking())
        }
    }
}

function lookingForMistakes (): ActionPending {
    return {
        type: ActionType.LOOKING_FOR_MISTAKES
    }
}

function saveResults (numbers: NumbersWithState): ActionSuccess {
    return {
        type: ActionType.NO_MISTAKES,
        data: numbers
    }
}

function failLooking (): ActionFail {
    return {
        type: ActionType.THERE_ARE_MISTAKES,
    }
}