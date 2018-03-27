import {
	SET_AUTH_TOKEN,
	setAuthToken,
	CLEAR_AUTH,
	clearAuth,
	AUTH_REQUEST,
	authRequest,
	AUTH_SUCCESS,
	authSuccess,
	AUTH_ERROR,
	authError,
	login,
	refreshAuthToken,
	storeAuthInfo
} from '../auth';

import {API_BASE_URL} from '../../config';

describe('auth', () => {

	it('should return the setAuthToken action', () => {
		const authToken = '123';
		const action = setAuthToken(authToken);
		expect(action.type).toEqual(SET_AUTH_TOKEN);
		expect(action.authToken).toEqual(authToken);
	});

	it('should return the clearAuth action', () => {
		const action = clearAuth();
		expect(action.type).toEqual(CLEAR_AUTH);
	});

	it('should return the authRequest action', () => {
		const action = authRequest();
		expect(action.type).toEqual(AUTH_REQUEST);
	});

	it('should return the authSuccess action', () => {
		const currentUser = 'ian';
		const action = authSuccess(currentUser);
		expect(action.type).toEqual(AUTH_SUCCESS);
		expect(action.currentUser).toEqual(currentUser);
	});

	it('should return the authError action', () => {
		const error = 'error';
		const action = authError(error);
		expect(action.type).toEqual(AUTH_ERROR);
		expect(action.error).toEqual(error);
	});

	it('should dispatch authRequest', () => {
        const dispatch = jest.fn();
        const username = '123';
        const password = '456';
        return login(username, password)(dispatch).then(() => {
			expect(dispatch).toHaveBeenCalledWith(authRequest());
		});
	});	

	it('should dispatch authRequest', () => {
        fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return authToken;
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
        return refreshAuthToken()(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/refresh`, {
        		method: 'POST',
		        headers: {
		            Authorization: 'Bearer 123'
		        }        		
        	});
			expect(dispatch).toHaveBeenCalledWith(authRequest());
		});
	});		

});