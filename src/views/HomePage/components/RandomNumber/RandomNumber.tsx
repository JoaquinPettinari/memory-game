import { useContext } from "react";
import { HomePageContext } from "../HomePageComponent/HomePageComponent";

function RandomNumber(){

    const { randomNumber } = useContext( HomePageContext );

    return(
        <h1>
            Number {randomNumber}
        </h1>
    )
}

export { RandomNumber }