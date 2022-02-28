import { Grid, TextField } from "@mui/material"
import { MultiLineProps } from "../../../../interfaces"

function MultiLine({ onChange }: MultiLineProps) {
    return (
        <Grid item xs={11} sm={6} style={{ marginTop:'10px'}}>
            <TextField
                id="Multiline"
                label="What's the number?"
                onChange={onChange}
                multiline
                fullWidth
                rows={10}
            />
        </Grid>
    )
}

export { MultiLine }