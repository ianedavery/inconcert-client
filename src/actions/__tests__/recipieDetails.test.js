import {
	FETCH_RECIPIE_DETAILS_SUCCESS,
	fetchRecipieDetailsSuccess,
	FETCH_RECIPIE_DETAILS_ERROR,
	fetchRecipieDetailsError,
	fetchRecipieDetails
} from '../recipieDetails';

import {API_BASE_URL} from '../../config';

describe('recipieDetails', () => {

	it('should return fetchRecipieDetailsSuccess', () => {
		const recipie = 'recipie';
		const action = fetchRecipieDetailsSuccess(recipie);
		expect(action.type).toEqual(FETCH_RECIPIE_DETAILS_SUCCESS);
		expect(action.recipie).toEqual(recipie);
	});

	it('should return fetchRecipieDetailsError', () => {
		const error = 'error';
		const action = fetchRecipieDetailsError(error);
		expect(action.type).toEqual(FETCH_RECIPIE_DETAILS_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch fetchRecipieDetailsSuccess', () => {
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
        let id = '123';
        return fetchRecipieDetails(id)(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipies/` + id, {
        		method: 'GET',
        		headers: {
            		Authorization: 'Bearer 123'
        		}
    		});
    		expect(dispatch).toHaveBeenCalledWith(fetchRecipieDetailsSuccess());
        });
	});	

});