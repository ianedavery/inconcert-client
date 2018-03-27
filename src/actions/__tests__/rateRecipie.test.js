import {
	RATE_RECIPIE_SUCCESS,
	rateRecipieSuccess,
	RATE_RECIPIE_ERROR,
	rateRecipieError,
	rateRecipie
} from '../rateRecipie';

import {API_BASE_URL} from '../../config';

describe('rateRecipie', () => {

	it('should return rateRecipieSuccess', () => {
		const action = rateRecipieSuccess();
		expect(action.type).toEqual(RATE_RECIPIE_SUCCESS);
	});

	it('should return rateRecipieError', () => {
		const error = 'error';
		const action = rateRecipieError(error);
		expect(action.type).toEqual(RATE_RECIPIE_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch rateRecipieSuccess', () => {
        let data = {
        	id: '123',
        	rating: 5,
        	numberOfRatings: 5
        };
        fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                	return data
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
        let id = data.id;
        return rateRecipie(id, data)(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipies/` +  id, {
		        method: 'put',
		        headers: {
		            Authorization: 'Bearer 123',
		            'Accept': 'application/json',
		            'Content-Type': 'application/json',
		        },
		        body: JSON.stringify(data)
		    });
	       	expect(dispatch).toHaveBeenCalledWith(rateRecipieSuccess());
        });
	});	


});