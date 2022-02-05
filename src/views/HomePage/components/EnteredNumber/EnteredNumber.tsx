import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const useStyles = makeStyles({
    errorNumber: {
        color: 'red',
    },
});

function EnteredNumber() {
    const { errorNumber } = useStyles();
    const { numbers } = useTypedSelector((state) => state.numbers);

    return (
        <Grid item xs={11} sm={7}>
            {console.log(numbers)}
            {numbers.map(({number, error}, index) => (
                <Typography variant="h6" className={error && errorNumber}>
                    {number}
                </Typography>
            ))}
        </Grid>
    )
}

export { EnteredNumber }