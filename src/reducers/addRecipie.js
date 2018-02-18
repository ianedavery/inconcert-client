import {ADD_RECIPIE_SUCCESS, ADD_RECIPIE_ERROR} from '../actions/addRecipie';

const initialState = {
    deleteRecipie: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === ADD_RECIPIE_SUCCESS) {
        return Object.assign({}, state, {
            deleteRecipie: action.recipie,
            error: null
        });
    }
    else if (action.type === ADD_RECIPIE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}