import { Button, Grid } from '@mui/material';
import { FinishButtonProps } from '../../../../interfaces'

function FinishButton({ validateRandomNumber }: FinishButtonProps) {

    return (
        <Grid item xs={11} >
            <Button
                variant="contained"
                color="primary"
                onClick={validateRandomNumber}
            >
                Finish
            </Button>
        </Grid>
    );
};

export { FinishButton };
