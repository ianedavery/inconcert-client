import {API_BASE_URL} from '../config';

export const ADD_RECIPIE_SUCCESS = 'ADD_RECIPIE_SUCCESS';
export const addRecipieSuccess = newRecipie => ({
    type: ADD_RECIPIE_SUCCESS,
    newRecipie
});

export const ADD_RECIPIE_ERROR = 'ADD_RECIPIE_ERROR';
export const addRecipieError = error => ({
    type: ADD_RECIPIE_ERROR,
    error
});


//calls POST to add a new recipe to the DB
export const addRecipie = (recipie) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipies/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipie)
    })
        .then(res => res.json())
        .then((newRecipie) => dispatch(addRecipieSuccess(newRecipie)))
        .catch(err => {
            dispatch(addRecipieError(err));
        });
};