import { useReducer } from 'react';
import AppContext from './appContext';
import Reducer from '../action/Reducer';

const AppState = (props) => {
    const initialState = {
         charactersAll: [],
         favorities: []
    }

    const [state, dispatch] = useReducer(Reducer, initialState);

    const getCharacters = async () => {
        const data = await fetch('https://swapi.dev/api/people/');
        const characters = await data.json();
        dispatch({
            type: 'GET-CHARACTERS',
            payload: characters.results
        })
    }

    const getFavoritie = (character) => {
        dispatch({
            type: 'GET-INFORMATION', 
            payload: character
        })
    }

    return(
        <AppContext.Provider
            value={{
                charactersAll: state.charactersAll,
                favorities: state.favorities,
                getCharacters,
                getFavoritie
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;