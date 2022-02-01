import { Button, Grid } from '@mui/material';
import { StartButtonProps } from '../../../../interfaces';

function StartButton({ randomNumber, handleStart }: StartButtonProps) {    

    if (!randomNumber) return null

    return (
        <Grid item xs={11}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleStart}
            >
                Start
            </Button>
        </Grid>
    );
};

export { StartButton };
