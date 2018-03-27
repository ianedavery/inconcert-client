import React from 'react';
import {shallow} from 'enzyme';

import {Login} from '../Login';

describe('<Login />', () => {

	it('renders without crashing', () => {
		shallow(<Login />);
	});

	it('redirects to dashboard when the user is logged in', () => {
		let props = {
			loggedIn: true
		};
		const wrapper = shallow(<Login {...props} />);
		console.log(wrapper.debug());
		expect(wrapper.find('.dashboard-redirect').length).toBe(1);
	});

});