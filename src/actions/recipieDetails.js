import {API_BASE_URL} from '../config';
//import {normalizeResponseErrors} from './util';

export const FETCH_RECIPIE_DETAILS_SUCCESS = 'FETCH_RECIPIE_DETAILS_SUCCESS';
export const fetchRecipieDetailsSuccess = recipie => ({
    type: FETCH_RECIPIE_DETAILS_SUCCESS,
    recipie
});

export const FETCH_RECIPIE_DETAILS_ERROR = 'FETCH_RECIPIE_DETAILS_ERROR';
export const fetchRecipieDetailsError = error => ({
    type: FETCH_RECIPIE_DETAILS_ERROR,
    error
});

export const fetchRecipieDetails = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/` + id, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        //.then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((recipie) => dispatch(fetchRecipieDetailsSuccess(recipie)))
        .catch(err => {
            dispatch(fetchRecipieDetailsError(err));
        });
};