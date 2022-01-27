import { createContext } from 'react';
import { useHomePage } from '../../../../hooks/useHomePage';
import { HomePageContextProps } from '../../../../interfaces';

export const HomePageContext = createContext({} as HomePageContextProps);
const { Provider } = HomePageContext;

export interface Props {
    children?: React.ReactElement | React.ReactElement[];
}


export const HomePageComponent = ({ children }: Props ) => {

    const { submitForm, randomNumber } = useHomePage();

    return (
        <Provider value={{
            submitForm,
            randomNumber            
        }}>
            { children }
        </Provider>
    )
}