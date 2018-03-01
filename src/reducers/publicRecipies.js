import {FETCH_PUBLIC_RECIPIES_SUCCESS, FETCH_PUBLIC_RECIPIES_ERROR} from '../actions/publicRecipies';

const initialState = {
    publicRecipies: 'placeholder',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PUBLIC_RECIPIES_SUCCESS) {
        console.log(action.publicRecipies);
        return Object.assign({}, state, {
            publicRecipies: action.publicRecipies,
            error: null
        });
    } 
    else if (action.type === FETCH_PUBLIC_RECIPIES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}