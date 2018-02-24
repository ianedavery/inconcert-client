import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './util';

export const DELETE_RECIPIE_SUCCESS = 'DELETE_RECIPIE_SUCCESS';
export const deleteRecipieSuccess = deleteRecipie => ({
    type: DELETE_RECIPIE_SUCCESS,
    deleteRecipie
});

export const DELETE_RECIPIE_ERROR = 'DELETE_RECIPIE_ERROR';
export const deleteRecipieError = error => ({
    type: DELETE_RECIPIE_ERROR,
    error
});

export const deleteRecipie = (id) => (dispatch, getState) => {
    console.log('deleteRecipie fired');
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/` + id, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        //.then(res => res.json())
        .then((recipie) => dispatch(deleteRecipieSuccess(recipie)))
        .catch(err => {
            dispatch(deleteRecipieError(err));
        });
};