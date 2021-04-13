import Types from '../types';

const Reducer = (state, action) => {
    switch(action.type) {
        case Types.GET_CHARACTERS:
            return{
                ...state,
                charactersAll: action.payload
            }
        case Types.GET_INFORMARION:
            return {
                ...state,
                favorities: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;