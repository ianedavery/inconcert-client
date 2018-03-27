import {
	EDIT_RECIPIE_SUCCESS,
	editRecipieSuccess,
	EDIT_RECIPIE_ERROR,
	editRecipieError,
	editRecipie
} from '../editRecipie';

import {API_BASE_URL} from '../../config';

describe('editRecipie', () => {

	it('should return the editRecipieSuccess action', () => {
		const action = editRecipieSuccess();
		expect(action.type).toEqual(EDIT_RECIPIE_SUCCESS);
	});

	it('should return the editRecipieError action', () => {
		const error = 'error';
		const action = editRecipieError(error);
		expect(action.type).toEqual(EDIT_RECIPIE_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch editRecipieSuccess', () => {
        let recipie = {
        	id: '123',
        	name: 'waffles',
        	instructions: 'mix it all together'
        };
        fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                	return recipie
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
        return editRecipie(recipie)(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipies/` + recipie.id, {
        		method: 'put',
		        headers: {
		            Authorization: 'Bearer 123',
        			'Accept': 'application/json',
            		'Content-Type': 'application/json',		            
		        },
        			body: JSON.stringify(recipie)       		
        	});
	       	expect(dispatch).toHaveBeenCalledWith(editRecipieSuccess());
        });
	});	

});