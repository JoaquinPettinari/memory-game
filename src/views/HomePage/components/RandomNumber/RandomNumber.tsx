import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { HomePageContext } from "../HomePageComponent/HomePageComponent";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    number: {
        letterSpacing: '1em',
        overflowWrap: 'anywhere'
    },
});

function RandomNumber() {
    const { number } = useStyles();
    const { randomNumber } = useContext(HomePageContext);

    return (
        <Grid item xs={11} sm={6}>
            <Typography variant="h6" className={number}>
                {randomNumber}
            </Typography>
        </Grid>
    )
}

export { RandomNumber }