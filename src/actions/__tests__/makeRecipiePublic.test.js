import {
	PUBLIC_RECIPIE_SUCCESS,
	publicRecipieSuccess,
	PUBLIC_RECIPIE_ERROR,
	publicRecipieError,
	publicRecipie
} from '../makeRecipiePublic';

import {API_BASE_URL} from '../../config';

describe('makeRecipiePublic', () => {
	
	it('should return the publicRecipieSuccess action', () => {
		const action = publicRecipieSuccess();
		expect(action.type).toEqual(PUBLIC_RECIPIE_SUCCESS);
	});

	it('should return the publicRecipieError action', () => {
		const error = 'error';
		const action = publicRecipieError(error);
		expect(action.type).toEqual(PUBLIC_RECIPIE_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch publicRecipieSuccess', () => {
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
        return publicRecipie(id)(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipies/` +  id, {
		        method: 'put',
        		headers: {
           			Authorization: 'Bearer 123',
            		'Accept': 'application/json',
            		'Content-Type': 'application/json',
        		},
        			body: JSON.stringify({id: id, public: true})
        	});
        	expect(dispatch).toHaveBeenCalledWith(publicRecipieSuccess());
        });
	});	

});