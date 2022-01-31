import { Grid } from "@mui/material"
import { RandomNumber, ResetButton, StartButton } from ".."


function NumberGenerator(){

    //Usar el context acá y pasar por prop los datos necesitdos
    return(
        <Grid container spacing={3} justifyContent="center" style={{margin: '20px 0'}}>
            <ResetButton />
            <RandomNumber />
            <StartButton />
        </Grid>
    )
}

export { NumberGenerator }