import {
	PRIVATE_RECIPIE_SUCCESS,
	privateRecipieSuccess,
	PRIVATE_RECIPIE_ERROR,
	privateRecipieError,
	privateRecipie
} from '../makeRecipiePrivate';

import {API_BASE_URL} from '../../config';

describe('makeRecipiePrivate', () => {

	it('should return the privateRecipieSuccess action', () => {
		const action = privateRecipieSuccess();
		expect(action.type).toEqual(PRIVATE_RECIPIE_SUCCESS);
	});

	it('should return the privateRecipieError action', () => {
		const error = 'error';
		const action = privateRecipieError(error);
		expect(action.type).toEqual(PRIVATE_RECIPIE_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch privateRecipieSuccess', () => {
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
        let id = '123';
        return privateRecipie(id)(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipies/` +  id, {
		        method: 'put',
        		headers: {
           			Authorization: 'Bearer 123',
            		'Accept': 'application/json',
            		'Content-Type': 'application/json',
        		},
        			body: JSON.stringify({id: id, public: false})
        	});
        	expect(dispatch).toHaveBeenCalledWith(privateRecipieSuccess());
        });
	});

});