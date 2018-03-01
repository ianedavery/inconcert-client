import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './util';

export const PRIVATE_RECIPIE_SUCCESS = 'PRIVATE_RECIPIE_SUCCESS';
export const privateRecipieSuccess = privateRecipie => ({
    type: PRIVATE_RECIPIE_SUCCESS,
    privateRecipie
});

export const PRIVATE_RECIPIE_ERROR = 'PRIVATE_RECIPIE_ERROR';
export const privateRecipieError = error => ({
    type: PRIVATE_RECIPIE_ERROR,
    error
});

export const privateRecipie = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/` +  id, {
        method: 'put',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id, public: false})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((recipie) => dispatch(privateRecipieSuccess(recipie)))
        .catch(err => {
            dispatch(privateRecipieError(err));
        });
};