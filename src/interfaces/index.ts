
export interface ErrorTextProps {
    touched: boolean | undefined
    error: string | undefined
}

export interface ValuesNumberForm {
    number: number
}

export interface HomePageContextProps {
    submitForm: (values: ValuesNumberForm) => void ,
    randomNumber: string | undefined
}