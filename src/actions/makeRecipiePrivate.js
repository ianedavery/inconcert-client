import {API_BASE_URL} from '../config';

export const PRIVATE_RECIPIE_SUCCESS = 'PRIVATE_RECIPIE_SUCCESS';
export const privateRecipieSuccess = () => ({
    type: PRIVATE_RECIPIE_SUCCESS
});

export const PRIVATE_RECIPIE_ERROR = 'PRIVATE_RECIPIE_ERROR';
export const privateRecipieError = error => ({
    type: PRIVATE_RECIPIE_ERROR,
    error
});

//send a put request to the server to set 'public' to false
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
        .then(res => res.json())
        .then(() => dispatch(privateRecipieSuccess()))
        .catch(err => {
            dispatch(privateRecipieError(err));
        });
};