import {API_BASE_URL} from '../config';
//import {normalizeResponseErrors} from './util';

export const FETCH_RECIPIES_SUCCESS = 'FETCH_RECIPIES_SUCCESS';
export const fetchRecipiesSuccess = recipies => ({
    type: FETCH_RECIPIES_SUCCESS,
    recipies
});

export const FETCH_RECIPIES_ERROR = 'FETCH_RECIPIES_ERROR';
export const fetchRecipiesError = error => ({
    type: FETCH_RECIPIES_ERROR,
    error
});

export const fetchRecipies = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        //.then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((recipies) => dispatch(fetchRecipiesSuccess(recipies)))
        .catch(err => {
            dispatch(fetchRecipiesError(err));
        });
};