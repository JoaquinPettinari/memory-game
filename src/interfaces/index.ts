
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
    resetNumber: () => void,
    time: number,
    handleStart: () => void,
    handleReset: () => void,
    isActive: boolean,
}

export interface StopWatchProps {
    time: number
}

export interface RandomButtonsProps {
    handleReset: () => void
    resetNumber: () => void
    handleStart: () => void
    randomNumber: string | undefined
    isActive: boolean
}

export interface ResetButtonProps {
    handleReset: () => void
    resetNumber: () => void
    randomNumber: string | undefined
}

export interface RandomNumberProps {
    randomNumber: string | undefined
}

export interface StartButtonProps {
    handleStart: () => void
    randomNumber: string | undefined
}

export interface FinishButtonProps {
    validateRandomNumber: () => void
}