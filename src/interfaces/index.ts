import { ChangeEvent } from "react";

export interface ErrorTextProps {
    touched: boolean | undefined
    error: string | undefined
}

export interface ValuesNumberForm {
    number: number
}

export interface HomePageContextProps {
    submitForm: (values: ValuesNumberForm) => void ,
    randomNumber: string | undefined,
    resetNumber: FunctionReturnVoid,
    time: number,
    handleStart: FunctionReturnVoid,
    handleReset: FunctionReturnVoid,
    isActive: boolean,
    handlePauseResume: FunctionReturnVoid,
}

export interface StopWatchProps {
    time: number
}

export interface RandomButtonsProps {
    handleReset: FunctionReturnVoid
    resetNumber: FunctionReturnVoid
    handleStart: FunctionReturnVoid
    randomNumber: string | undefined
    isActive: boolean
    validateRandomNumber: FunctionReturnVoid
}

export interface ResetButtonProps {
    handleReset: FunctionReturnVoid
    resetNumber: FunctionReturnVoid
    randomNumber: string | undefined
}

export interface RandomNumberProps {
    randomNumber: string | undefined
}

export interface StartButtonProps {
    handleStart: FunctionReturnVoid
    randomNumber: string | undefined
}

export interface FinishButtonProps {
    validateRandomNumber: FunctionReturnVoid
}

export interface MultiLineProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

type FunctionReturnVoid = () => void

//REDUX
export enum ActionType {
    LOOKING_FOR_MISTAKES = 'LOOKING_FOR_MISTAKES',
    NO_MISTAKES = 'NO_MISTAKES',
    THERE_ARE_MISTAKES = 'THERE_ARE_MISTAKES'
}

export interface ActionPending {
    type: ActionType.LOOKING_FOR_MISTAKES;
}

export interface ActionSuccess {
    type: ActionType.NO_MISTAKES;
    data: NumbersWithState;
}

export interface ActionFail {
    type: ActionType.THERE_ARE_MISTAKES;
    data?: string ;
}

export type NumbersWithState = {
    error: boolean;
    number: string
}[]

export type Action = ActionPending | ActionSuccess | ActionFail;