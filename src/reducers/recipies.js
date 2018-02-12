import {FETCH_RECIPIES_SUCCESS, FETCH_RECIPIES_ERROR} from '../actions/recipies';

const initialState = {
    recipies: 'placeholder',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_RECIPIES_SUCCESS) {
        console.log(action.recipies);
        return Object.assign({}, state, {
            recipies: action.recipies,
            error: null
        });
    } 
    else if (action.type === FETCH_RECIPIES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}