import {API_BASE_URL} from '../config';

export const DELETE_RECIPIE_SUCCESS = 'DELETE_RECIPIE_SUCCESS';
export const deleteRecipieSuccess = () => ({
    type: DELETE_RECIPIE_SUCCESS
});

export const DELETE_RECIPIE_ERROR = 'DELETE_RECIPIE_ERROR';
export const deleteRecipieError = error => ({
    type: DELETE_RECIPIE_ERROR,
    error
});

//delete call to the server to delete a recipe
export const deleteRecipie = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/` + id, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(() => dispatch(deleteRecipieSuccess()))
        .catch(err => {
            dispatch(deleteRecipieError(err));
        });
};