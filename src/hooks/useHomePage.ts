import { useState } from "react"
import { ValuesNumberForm } from "../interfaces"
import { generateRandomNumber } from "../utils"

export const useHomePage = () => {
    const [randomNumber, setRandomNumber] = useState<string | undefined>(undefined)

    const submitForm = (values: ValuesNumberForm) => {
        setRandomNumber(generateRandomNumber(values.number))
    }

    const resetNumber = () => {
        setRandomNumber(undefined)
    }

    return {
        submitForm,
        randomNumber,
        resetNumber
    }
}