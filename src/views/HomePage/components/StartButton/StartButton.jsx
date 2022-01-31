import { Button, Grid } from '@mui/material';
import { useContext } from 'react';
import { HomePageContext } from '../HomePageComponent/HomePageComponent';

function StartButton() {

    const { randomNumber, start } = useContext(HomePageContext);

    if (!randomNumber) return null

    return (
        <Grid item xs={11}>
            <Button
                variant="contained"
                color="primary"
                onClick={start}
            >
                Start
            </Button>
        </Grid>
    );
};

export { StartButton };
