import {RECIPIES_SEARCH_TERM} from '../actions/liveSearch';

const initialState = {
    searchTerm: 'default'
};

export default function reducer(state = initialState, action) {
    if (action.type === RECIPIES_SEARCH_TERM) {
        return Object.assign({}, state, {
            searchTerm: action.searchTerm
        });
    }
    return state;
}