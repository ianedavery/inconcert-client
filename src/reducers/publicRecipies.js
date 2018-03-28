import {FETCH_PUBLIC_RECIPIES_SUCCESS, FETCH_PUBLIC_RECIPIES_ERROR} from '../actions/publicRecipies';

const initialState = {
    publicRecipies: 'placeholder'
};

export default function publicRecipiesReducer(state = initialState, action) {
    if (action.type === FETCH_PUBLIC_RECIPIES_SUCCESS) {
        return Object.assign({}, state, {
            publicRecipies: action.publicRecipies
        });
    } 
    else if (action.type === FETCH_PUBLIC_RECIPIES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}