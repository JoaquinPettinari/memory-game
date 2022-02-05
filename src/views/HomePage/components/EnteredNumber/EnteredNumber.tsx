import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { numbers as numberState } from "../../../../reducers/numbersReducer";

const useStyles = makeStyles({
    numbersClasses: {
        letterSpacing: '1em',
        overflowWrap: 'anywhere'
    },
});

function EnteredNumber() {
    const { numbersClasses } = useStyles();
    const { numbers } = useAppSelector(numberState)

    return (
        <Grid container item xs={11} sm={7} justifyContent="center" >
            {numbers.map(({number, error}, index) => (
                <Typography key={index} className={numbersClasses} variant="h6" sx={{ color: error ? 'red': 'black' }}>
                    {number}
                </Typography>
            ))}            
        </Grid>
    )
}

export { EnteredNumber }