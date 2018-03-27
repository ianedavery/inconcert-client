import {API_BASE_URL} from '../config';

export const PUBLIC_RECIPIE_SUCCESS = 'PUBLIC_RECIPIE_SUCCESS';
export const publicRecipieSuccess = () => ({
    type: PUBLIC_RECIPIE_SUCCESS
});

export const PUBLIC_RECIPIE_ERROR = 'PUBLIC_RECIPIE_ERROR';
export const publicRecipieError = error => ({
    type: PUBLIC_RECIPIE_ERROR,
    error
});

//send a put request to the server to set 'public' to true
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
        .then(res => res.json())
        .then(() => dispatch(publicRecipieSuccess()))
        .catch(err => {
            dispatch(publicRecipieError(err));
        });
};