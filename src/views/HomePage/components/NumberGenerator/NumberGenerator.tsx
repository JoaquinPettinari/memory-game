import { Grid } from "@mui/material"
import { useContext } from "react";
import { RandomButtons, RandomNumber, ResetButton, StartButton } from ".."
import { HomePageContext } from "../HomePageComponent/HomePageComponent";
import { StopWatch } from "../StopWatch/StopWatch"


function NumberGenerator(){

    const { time, randomNumber, resetNumber, handleReset, handleStart, isActive } = useContext(HomePageContext);
    
    return(
        <Grid container spacing={3} justifyContent="center" style={{margin: '20px 0'}}>
            <StopWatch time={time} />
            <RandomNumber randomNumber={randomNumber} />
            <RandomButtons randomNumber={randomNumber} resetNumber={resetNumber} handleReset={handleReset} handleStart={handleStart} isActive={isActive} />
        </Grid>
    )
}

export { NumberGenerator }