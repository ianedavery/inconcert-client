import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './util';

export const PUBLIC_RECIPIE_SUCCESS = 'PUBLIC_RECIPIE_SUCCESS';
export const publicRecipieSuccess = publicRecipie => ({
    type: PUBLIC_RECIPIE_SUCCESS,
    publicRecipie
});

export const PUBLIC_RECIPIE_ERROR = 'PUBLIC_RECIPIE_ERROR';
export const publicRecipieError = error => ({
    type: PUBLIC_RECIPIE_ERROR,
    error
});

export const publicRecipie = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/` +  id, {
        method: 'put',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id, public: true})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((recipie) => dispatch(publicRecipieSuccess(recipie)))
        .catch(err => {
            dispatch(publicRecipieError(err));
        });
};