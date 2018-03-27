import {API_BASE_URL} from '../config';

export const RATE_RECIPIE_SUCCESS = 'RATE_RECIPIE_SUCCESS';
export const rateRecipieSuccess = () => ({
    type: RATE_RECIPIE_SUCCESS
});

export const RATE_RECIPIE_ERROR = 'RATE_RECIPIE_ERROR';
export const rateRecipieError = error => ({
    type: RATE_RECIPIE_ERROR,
    error
});

//send a put request to the server to rate the recipe
export const rateRecipie = (id, data) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/` +  id, {
        method: 'put',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(() => dispatch(rateRecipieSuccess()))
        .catch(err => {
            dispatch(rateRecipieError(err));
        });
};