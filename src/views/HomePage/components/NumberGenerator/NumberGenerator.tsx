import { Grid } from "@mui/material"
import { useContext } from "react";
import { RandomNumber, ResetButton, StartButton } from ".."
import { HomePageContext } from "../HomePageComponent/HomePageComponent";
import { StopWatch } from "../StopWatch/StopWatch"


function NumberGenerator(){

    const { time, randomNumber, resetNumber, handleReset, handleStart } = useContext(HomePageContext);
    
    return(
        <Grid container spacing={3} justifyContent="center" style={{margin: '20px 0'}}>
            <StopWatch time={time} />
            <ResetButton randomNumber={randomNumber} resetNumber={resetNumber} handleReset={handleReset} />
            <RandomNumber randomNumber={randomNumber} />
            <StartButton randomNumber={randomNumber} handleStart={handleStart} />
        </Grid>
    )
}

export { NumberGenerator }