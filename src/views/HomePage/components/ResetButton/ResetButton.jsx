import { Button, Grid } from '@mui/material';
import { useContext } from 'react';
import { HomePageContext } from '../HomePageComponent/HomePageComponent';

function ResetButton() {

    const { randomNumber, resetNumber } = useContext(HomePageContext);

    if (!randomNumber) return null

    return (
        <Grid item xs={11} >
            <Button
                variant="contained"
                color="secondary"
                onClick={resetNumber}
            >
                Reset
            </Button>
        </Grid>
    );
};

export { ResetButton };
