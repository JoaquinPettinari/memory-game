import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    miliSec: {
        color:  '#e42a2a !important'
    },
    digits: {
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        fontSize: '3rem',
        color:  '#C4C4C4',
    }
});


export default function Timer({ time }) {
    const { miliSec, digits } = useStyles();

    return (
        <Grid container justifyContent={"center"} alignContent={"center"}>
            <Grid item>
                <Typography className={digits}>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={digits}>
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={`${digits} ${miliSec}`}>
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </Typography>
            </Grid>
        </Grid>
    );
}