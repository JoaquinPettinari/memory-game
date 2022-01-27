import { useState } from "react"
import { ValuesNumberForm } from "../interfaces"
import { generateRandomNumber } from "../utils"

export const useHomePage = () => {
    const [randomNumber, setRandomNumber] = useState<number | undefined>(undefined)

    const submitForm = (values: ValuesNumberForm) => {
        setRandomNumber(generateRandomNumber(values.number))
    }
    return {
        submitForm,
        randomNumber
    }
}