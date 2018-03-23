import {ADD_RECIPIE_SUCCESS,
		addRecipieSuccess,
		ADD_RECIPIE_ERROR,
		addRecipieError,
		addRecipie
} from './addRecipie';

import {API_BASE_URL} from '../config';

describe('addRecipie', () => {

	it('should return the addRecipieSuccess action', () => {
		const newRecipie = 'waffles';
		const action = addRecipieSuccess(newRecipie);
		expect(action.type).toEqual(ADD_RECIPIE_SUCCESS);
		expect(action.newRecipie).toEqual(newRecipie);
	});

	it('should return the addRecipieError action', () => {
		const error = 'something went wrong';
		const action = addRecipieError(error);
		expect(action.type).toEqual(ADD_RECIPIE_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch addRecipieSuccess', () => {
		const newRecipie = [];
        fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return newRecipie;
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
        return addRecipie()(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipies/`, {
        		method: 'POST',
		        headers: {
		            Authorization: 'Bearer 123',
		            'content-type': 'application/json'
		        }        		
        	});
        	expect(dispatch).toHaveBeenCalledWith(addRecipieSuccess(newRecipie));
        });
	});

});