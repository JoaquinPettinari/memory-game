import { Grid } from "@mui/material";
import { StartButton, ResetButton } from '..'
import { RandomButtonsProps } from "../../../../interfaces";
import { FinishButton } from "../FinishButton/FinishButton";

function RandomButtons({ handleReset, handleStart, randomNumber, resetNumber, isActive }: RandomButtonsProps) {
    return (
        <Grid container justifyContent={"center"} spacing={3} style={{ marginTop: '10px' }}>
            <Grid item xs="auto">
                <ResetButton randomNumber={randomNumber} resetNumber={resetNumber} handleReset={handleReset} />
            </Grid>
            <Grid item xs="auto">
                {
                    isActive 
                    ? <FinishButton validateRandomNumber={() => console.log("Hello")} />
                    : <StartButton randomNumber={randomNumber} handleStart={handleStart} />
                }
            </Grid>
        </Grid>
    )
}

export { RandomButtons }