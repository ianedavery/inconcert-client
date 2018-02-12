import {FETCH_RECIPIE_DETAILS_SUCCESS, FETCH_RECIPIE_DETAILS_ERROR} from '../actions/recipieDetails';

const initialState = {
    recipie: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_RECIPIE_DETAILS_SUCCESS) {
        return Object.assign({}, state, {
            recipie: action.recipie,
            error: null
        });
    }
    else if (action.type === FETCH_RECIPIE_DETAILS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}