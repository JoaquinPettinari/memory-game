import { Grid } from "@mui/material"
import { ChangeEvent, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { EnteredNumber, MultiLine, RandomButtons, RandomNumber } from ".."
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { HomePageContext } from "../HomePageComponent/HomePageComponent";
import { StopWatch } from "../StopWatch/StopWatch"
import { isEmpty } from 'lodash'
import { numbers as numberState, resetNumbers, validateNumbers } from "../../../../reducers/numbersReducer";

function NumberGenerator(){
    const { time, randomNumber, resetNumber, handleReset, handleStart, isActive, handlePauseResume } = useContext(HomePageContext);
    const [ number, setNumber ] = useState<string>("")
    const dispatch = useDispatch()
    const { numbers } = useAppSelector(numberState)

    const validateRandomNumber = () => {
        handlePauseResume()
        dispatch(validateNumbers(number, randomNumber))
    }

    const onChangeMultiLine = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value)
    }

    const reset = () => {
        handleReset()
        dispatch(resetNumbers())
    }
    return(
        <Grid container spacing={3} justifyContent="center" >
            {/* HAS TO FIX THIS*/}
            <StopWatch time={time} />
            {(!isActive || !isEmpty(numbers)) && <RandomNumber randomNumber={randomNumber} />}
            {(isActive && isEmpty(numbers)) && <MultiLine onChange={onChangeMultiLine} />}
            {!isEmpty(numbers) && <EnteredNumber />}
            <RandomButtons 
                validateRandomNumber={validateRandomNumber}
                randomNumber={randomNumber}
                resetNumber={resetNumber}
                handleReset={reset}
                handleStart={handleStart}
                isActive={isActive} 
            />
        </Grid>
    )
}

export { NumberGenerator }