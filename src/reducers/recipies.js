import {FETCH_RECIPIES_SUCCESS, FETCH_RECIPIES_ERROR} from '../actions/recipies';

const initialState = {
    recipies: ''
};

export default function recipiesReducer(state = initialState, action) {
    if (action.type === FETCH_RECIPIES_SUCCESS) {
        return Object.assign({}, state, {
            recipies: action.recipies
        });
    } 
    else if (action.type === FETCH_RECIPIES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}