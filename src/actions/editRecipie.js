import {API_BASE_URL} from '../config';

export const EDIT_RECIPIE_SUCCESS = 'EDIT_RECIPIE_SUCCESS';
export const editRecipieSuccess = () => ({
    type: EDIT_RECIPIE_SUCCESS
});

export const EDIT_RECIPIE_ERROR = 'EDIT_RECIPIE_ERROR';
export const editRecipieError = error => ({
    type: EDIT_RECIPIE_ERROR,
    error
});

//put call to the server to edit a recipe
export const editRecipie = (recipie) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/` + recipie.id, {
        method: 'put',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipie)
    })
        .then(res => res.json())
        .then(() => dispatch(editRecipieSuccess()))
        .catch(err => {
            dispatch(editRecipieError(err));
        });
};