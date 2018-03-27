//handles storing the searchTerm for live search
export const RECIPIES_SEARCH_TERM = 'RECIPIES_SEARCH_TERM';
export const recipiesSearchTerm = searchTerm => ({
    type: RECIPIES_SEARCH_TERM,
    searchTerm
});

//clears the search term from store
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const clearSearchTerm = () => ({
    type: CLEAR_SEARCH_TERM
});