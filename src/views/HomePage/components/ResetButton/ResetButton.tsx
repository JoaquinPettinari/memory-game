import { Button, Grid } from '@mui/material';
import { ResetButtonProps } from '../../../../interfaces'

function ResetButton({ randomNumber, resetNumber, handleReset }: ResetButtonProps) {    

    if (!randomNumber) return null

    return (
        <Grid item xs={11} >
            <Button
                variant="contained"
                color="secondary"
                onClick={() => { 
                    resetNumber()
                    handleReset()
                }}
            >
                Reset
            </Button>
        </Grid>
    );
};

export { ResetButton };
