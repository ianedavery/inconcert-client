import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './util';

export const EDIT_RECIPIE_SUCCESS = 'EDIT_RECIPIE_SUCCESS';
export const editRecipieSuccess = editRecipie => ({
    type: EDIT_RECIPIE_SUCCESS,
    editRecipie
});

export const EDIT_RECIPIE_ERROR = 'EDIT_RECIPIE_ERROR';
export const editRecipieError = error => ({
    type: EDIT_RECIPIE_ERROR,
    error
});

export const editRecipie = (id, data) => (dispatch, getState) => {
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
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((recipie) => dispatch(editRecipieSuccess(recipie)))
        .catch(err => {
            dispatch(editRecipieError(err));
        });
};