import {RECIPIES_SEARCH_TERM, CLEAR_SEARCH_TERM} from '../actions/liveSearch';

const initialState = {
    searchTerm: ''
};

export default function liveSearchReducer(state = initialState, action) {
    if (action.type === RECIPIES_SEARCH_TERM) {
        return Object.assign({}, state, {
            searchTerm: action.searchTerm
        });
    } else if (action.type === CLEAR_SEARCH_TERM) {
        return Object.assign({}, state, {
            searchTerm: ''
        });
    }
    return state;
}