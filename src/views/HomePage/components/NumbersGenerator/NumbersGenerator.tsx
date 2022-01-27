import { Button, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { ValuesNumberForm } from "../../../../interfaces";
import { generateRandomNumber } from "../../../../utils";
import { ErrorText } from "../ErrorText/ErrorText";
import { HomePageContext } from "../HomePageComponent/HomePageComponent";

const validationSearch = Yup.object().shape({
    number: Yup.number()
        .min(1, "Need at least one number")
        .required("Is required")
});

function NumberGenerator() {

    const { submitForm } = useContext( HomePageContext );

    return (
        <Formik
            initialValues={{ number: 0 }}
            validationSchema={validationSearch}
            onSubmit={submitForm}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container justifyContent="flex-end" spacing={4}>
                        <Grid item xs={10} sm={3} md={2} lg={1}>
                            <TextField
                                type="number"
                                fullWidth
                                name="number"
                                id="number"
                                label="Count of numbers"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.number}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={10} sm={6}>
                            <Button
                                color="primary"
                                type="submit"
                                variant="contained"
                                disabled={isSubmitting}
                            >
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <ErrorText touched={touched.number} error={errors.number} />
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    );
}

export { NumberGenerator }