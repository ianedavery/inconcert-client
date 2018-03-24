export const RECIPIES_SEARCH_TERM = 'RECIPIES_SEARCH_TERM';
export const recipiesSearchTerm = searchTerm => ({
    type: RECIPIES_SEARCH_TERM,
    searchTerm
});

export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const clearSearchTerm = () => ({
    type: CLEAR_SEARCH_TERM
});