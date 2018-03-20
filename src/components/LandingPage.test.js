import React from 'react';
import {shallow} from 'enzyme';
import {HashRouter} from 'react-router-dom';

import {LandingPage} from './LandingPage';

describe('<LandingPage />', () => {

	it('renders without crashing', () => {
		shallow(<LandingPage />);
	});

	it('redirects to dashboard when the user is logged in', () => {
		let props = {
			loggedIn: true
		};
		const wrapper = shallow(<LandingPage {...props} />);
		console.log(wrapper.debug());
		expect(wrapper.find('.dashboard-redirect').length).toBe(1);
	});

});
