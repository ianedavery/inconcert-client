import {
	FETCH_PUBLIC_RECIPIES_SUCCESS,
	fetchPublicRecipiesSuccess,
	FETCH_PUBLIC_RECIPIES_ERROR,
	fetchPublicRecipiesError,
	fetchPublicRecipies
} from './publicRecipies';

import {API_BASE_URL} from '../config';

describe('publicRecipies', () => {

	it('should return fetchPublicRecipiesSuccess', () => {
		const publicRecipies = 'recipie';
		const action = fetchPublicRecipiesSuccess(publicRecipies);
		expect(action.type).toEqual(FETCH_PUBLIC_RECIPIES_SUCCESS);
		expect(action.publicRecipies).toEqual(publicRecipies);
	});

	it('should return fetchPublicRecipiesError', () => {
		const error = 'error';
		const action = fetchPublicRecipiesError(error);
		expect(action.type).toEqual(FETCH_PUBLIC_RECIPIES_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch fetchPublicRecipiesSuccess', () => {
		fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: true,
				json() {
					return
				}
			})
		);
		const dispatch = jest.fn();
    	let auth = {
    		auth: {
    	        	authToken: '123'
                  }
        };
        const getState = () => (auth);
        return fetchPublicRecipies()(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipies/public`, {
        		method: 'GET',
        		headers: {
            		Authorization: 'Bearer 123'
        		}
    		});
    		expect(dispatch).toHaveBeenCalledWith(fetchPublicRecipiesSuccess());
        });
	});

});