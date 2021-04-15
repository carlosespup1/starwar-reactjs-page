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
        const data = await fetch('https://3000-moccasin-swordtail-ktsl6e7o.ws-us03.gitpod.io/characters');
        const characters = await data.json();
        dispatch({
            type: 'GET-CHARACTERS',
            payload: characters
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