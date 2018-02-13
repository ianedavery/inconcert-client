import {DELETE_RECIPIE_SUCCESS, DELETE_RECIPIE_ERROR} from '../actions/deleteRecipie';

const initialState = {
    deleteRecipie: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === DELETE_RECIPIE_SUCCESS) {
        return Object.assign({}, state, {
            deleteRecipie: action.recipie,
            error: null
        });
    }
    else if (action.type === DELETE_RECIPIE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}