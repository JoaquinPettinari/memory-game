import { createContext } from 'react';
import { useHomePage } from '../../../../hooks/useHomePage';
import { useStopWatch } from '../../../../hooks/useStopWatch';
import { HomePageContextProps } from '../../../../interfaces';

export const HomePageContext = createContext({} as HomePageContextProps);
const { Provider } = HomePageContext;

export interface Props {
    children?: React.ReactElement | React.ReactElement[];
}


export const HomePageComponent = ({ children }: Props ) => {

    const { submitForm, randomNumber, resetNumber } = useHomePage();
    const { start, getTime, stopWatch} = useStopWatch()

    return (
        <Provider value={{
            submitForm,
            randomNumber,
            resetNumber,
            start,
            getTime,
            stopWatch
        }}>
            { children }
        </Provider>
    )
}