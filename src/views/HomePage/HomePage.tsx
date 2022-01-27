import { Title, NumberGenerator, RandomNumber, HomePageComponent } from './components'

export function HomePage(){

    return(
        <HomePageComponent>
            <Title />
            <NumberGenerator />
            <RandomNumber />
        </HomePageComponent>
    )
}