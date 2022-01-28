import { Typography } from "@mui/material";
import { useContext } from "react";
import { HomePageContext } from "../HomePageComponent/HomePageComponent";

function RandomNumber(){

    const { randomNumber } = useContext( HomePageContext );

    return(
        <Typography variant="body1">
            Number {randomNumber}
        </Typography>
    )
}

export { RandomNumber }