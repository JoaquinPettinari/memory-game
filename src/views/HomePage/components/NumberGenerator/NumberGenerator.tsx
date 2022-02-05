import { Grid } from "@mui/material"
import { ChangeEvent, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { EnteredNumber, MultiLine, RandomButtons, RandomNumber } from ".."
import { validateNumbers } from "../../../../actions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { HomePageContext } from "../HomePageComponent/HomePageComponent";
import { StopWatch } from "../StopWatch/StopWatch"
import { isEmpty } from 'lodash'

function NumberGenerator(){
    const { time, randomNumber, resetNumber, handleReset, handleStart, isActive, handlePauseResume } = useContext(HomePageContext);
    const [ number, setNumber ] = useState<string>("")
    const dispatch = useDispatch()
    const { numbers, looking } = useTypedSelector((state) => state.numbers);

    const validateRandomNumber = () => {
        handlePauseResume()
        dispatch(validateNumbers(number, randomNumber))
    }

    const onChangeMultiLine = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value)
    }

    return(
        <Grid container spacing={3} justifyContent="center" style={{margin: '20px 0'}}>
            <StopWatch time={time} />
            {console.log(numbers)}
            {(!isActive || !isEmpty(numbers)) && <RandomNumber randomNumber={randomNumber} />}
            {(isActive && isEmpty(numbers)) && <MultiLine onChange={onChangeMultiLine} />}
            {!isEmpty(numbers) && <EnteredNumber numbers={numbers} />}
            <RandomButtons 
                validateRandomNumber={validateRandomNumber}
                randomNumber={randomNumber}
                resetNumber={resetNumber}
                handleReset={handleReset}
                handleStart={handleStart}
                isActive={isActive} 
            />
        </Grid>
    )
}

export { NumberGenerator }