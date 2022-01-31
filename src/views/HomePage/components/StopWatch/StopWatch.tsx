import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { HomePageContext } from "../HomePageComponent/HomePageComponent";

function StopWatch() {

    const { getTime } = useContext(HomePageContext);

    return(
        <Grid xs={12}>
            {getTime}
        </Grid>
    )
}

export { StopWatch };