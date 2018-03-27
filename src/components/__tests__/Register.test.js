import React from 'react';
import {shallow} from 'enzyme';

import {Register} from '../Register';

describe('<Register />', () => {

	it('renders without crashing', () => {
		shallow(<Register />);
	});

	it('redirects to dashboard when the user is logged in', () => {
		let props = {
			loggedIn: true
		};
		const wrapper = shallow(<Register {...props} />);
		console.log(wrapper.debug());
		expect(wrapper.find('.dashboard-redirect').length).toBe(1);
	});

});