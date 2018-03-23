import {FETCH_RECIPIE_DETAILS_SUCCESS, FETCH_RECIPIE_DETAILS_ERROR} from '../actions/recipieDetails';

const initialState = {
    recipie: ''
};

export default function recipieDetailsReducer(state = initialState, action) {
    if (action.type === FETCH_RECIPIE_DETAILS_SUCCESS) {
        return Object.assign({}, state, {
            recipie: action.recipie
        });
    }
    else if (action.type === FETCH_RECIPIE_DETAILS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}