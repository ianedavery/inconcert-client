import {
	FETCH_RECIPIES_SUCCESS,
	fetchRecipiesSuccess,
	FETCH_RECIPIES_ERROR,
	fetchRecipiesError,
	fetchRecipies
} from '../recipies';

import {API_BASE_URL} from '../../config';

describe('recipies', () => {

	it('should return fetchRecipiesSuccess action', () => {
		const recipies = 'waffles';
		const action = fetchRecipiesSuccess(recipies);
		expect(action.type).toEqual(FETCH_RECIPIES_SUCCESS);
		expect(action.recipies).toEqual(recipies);
	});

	it('should return fetchRecipiesError action', () => {
		const error = 'error';
		const action = fetchRecipiesError(error);
		expect(action.type).toEqual(FETCH_RECIPIES_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch the fetchRecipiesSuccess action', () => {
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
        const getState = (id) => (auth);
        return fetchRecipies()(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipies/`, {
		        method: 'GET',
		        headers: {
		            Authorization: 'Bearer 123'
		        }
		    });
			expect(dispatch).toHaveBeenCalledWith(fetchRecipiesSuccess());
        });
	});

});