import {
	DELETE_RECIPIE_SUCCESS,
	deleteRecipieSuccess,
	DELETE_RECIPIE_ERROR,
	deleteRecipieError,
	deleteRecipie
} from '../deleteRecipie';

import {API_BASE_URL} from '../../config';

describe('deleteRecipie', () => {

	it('should return the deleteRecipieSuccess action', () => {
		const action = deleteRecipieSuccess();
		expect(action.type).toEqual(DELETE_RECIPIE_SUCCESS);
	});

	it('should return the deleteRecipieError action', () => {
		const error = 'error';
		const action = deleteRecipieError(error);
		expect(action.type).toEqual(DELETE_RECIPIE_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch deleteRecipieSuccess', () => {
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
        return deleteRecipie(id)(dispatch, getState).then(() =>{
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipies/` + id, {
        		method: 'DELETE',
		        headers: {
		            Authorization: 'Bearer 123'
		        }        		
        	});
	       	expect(dispatch).toHaveBeenCalledWith(deleteRecipieSuccess());
        });
	});	

});