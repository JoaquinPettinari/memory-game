import { Grid, Card, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { GAME_SELECTED } from "../../../../interfaces";
import { CountrysGame } from "../../../CountrysGame/CountrysGame";
import { NumbersGame } from "../../../NumbersGame/NumbersGame";
import CountryFlags from '../assets/countrysFlag.jpg'
import NumbersFlags from '../assets/numbersFlag.jpg'
import Cards from '../Cards/Cards'

export function GameCards() {
    const [gameSelected, setGameSelected] = useState<GAME_SELECTED | undefined>(undefined)

    const changeGame = (game: GAME_SELECTED) => {
        setGameSelected(game)
    }

    return (
        <>
            {!gameSelected && <Cards changeGame={changeGame} />}
            {gameSelected === GAME_SELECTED.NumbersGame && <NumbersGame />}
            {gameSelected === GAME_SELECTED.CountrysGame && <CountrysGame />}
        </>
    )
}