import {API_BASE_URL} from '../config';

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

//send a 'get' request to the server to fetch recipe details for a single recipe
export const fetchRecipieDetails = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/` + id, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => res.json())
        .then((recipie) => dispatch(fetchRecipieDetailsSuccess(recipie)))
        .catch(err => {
            dispatch(fetchRecipieDetailsError(err));
        });
};