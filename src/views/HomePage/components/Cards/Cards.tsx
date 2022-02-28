import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CountryFlags from '../../assets/countrysFlag.jpg'
import NumbersFlags from '../../assets/numbersFlag.jpg'
import { CardsProps, GAME_SELECTED } from "../../../../interfaces";

const useStyles = makeStyles({
    cardStyle: {
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: '#fafafa',
        },
    }
});

const cardsGame = [
    {
        title: 'Country Game',
        img: CountryFlags,
        value: GAME_SELECTED.CountrysGame
    },
    {
        title: 'Numbers Game',
        img: NumbersFlags,
        value: GAME_SELECTED.NumbersGame
    }
]

function Cards(props: CardsProps) {
    const { changeGame } = props
    const { cardStyle } = useStyles();

    return (
        <Grid container justifyContent="center">
            {cardsGame.map(({ title, img, value }, index) => (
                <Grid key={index} item xs={11} sm={4} onClick={() => changeGame(value)}>
                    <Card className={cardStyle}>
                        <CardContent>
                            <CardMedia image={img} component="img" height="150" />
                            <Typography variant="h5">{title}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))
            }
        </Grid>
    )
}

export default Cards;