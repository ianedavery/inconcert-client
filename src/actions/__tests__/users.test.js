import {registerUser} from '../users';

import {API_BASE_URL} from '../../config';

describe('users', () => {

	it('should dispatch registerUser', () => {
		let user = {username: 'ian', password: '123'};
		fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json() {
					return
				}
			})
		);
		const dispatch = jest.fn();
		return registerUser(user)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`, {
		        method: 'POST',
		        headers: {
		            'content-type': 'application/json'
		        },
		        body: JSON.stringify(user)
		    });
		});
	});

});