import {ADD_RECIPIE_SUCCESS, ADD_RECIPIE_ERROR} from '../actions/addRecipie';

const initialState = {
    recipie: []
};

export default function reducer(state = initialState, action) {
    if (action.type === ADD_RECIPIE_SUCCESS) {
        return Object.assign({}, state, {
            recipie: action.newRecipie
        });
    }
    else if (action.type === ADD_RECIPIE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}