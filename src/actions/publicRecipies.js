import {API_BASE_URL} from '../config';

export const FETCH_PUBLIC_RECIPIES_SUCCESS = 'FETCH_PUBLIC_RECIPIES_SUCCESS';
export const fetchPublicRecipiesSuccess = publicRecipies => ({
    type: FETCH_PUBLIC_RECIPIES_SUCCESS,
    publicRecipies
});

export const FETCH_PUBLIC_RECIPIES_ERROR = 'FETCH_PUBLIC_RECIPIES_ERROR';
export const fetchPublicRecipiesError = error => ({
    type: FETCH_PUBLIC_RECIPIES_ERROR,
    error
});

//send a get request to the server to fetch all the public recipes
export const fetchPublicRecipies = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/public`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => res.json())
        .then((recipies) => dispatch(fetchPublicRecipiesSuccess(recipies)))
        .catch(err => {
            dispatch(fetchPublicRecipiesError(err));
        });
};