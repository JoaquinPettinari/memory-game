import { Title, NumberConfig, NumberGenerator, HomePageComponent } from './components'

export function HomePage(){

    return(
        <HomePageComponent>
            <Title />
            <NumberConfig />
            <NumberGenerator />
        </HomePageComponent>
    )
}