import React from 'react';
import {shallow} from 'enzyme';

import {Navigation} from '../Navigation';

describe('<Navigation />', () => {

	it('renders without crashing', () => {
		shallow(<Navigation />);
	});

	it('should render the login and register links when props.loggedIn is false', () => {
		let props = {
			loggedIn: false
		};
		const wrapper = shallow(<Navigation {...props} />);
		expect(wrapper.find('.nav-list-item-one').length).toBe(1);
		expect(wrapper.find('.nav-list-item-two').length).toBe(1);
	});

	it('should render the logout link when props.loggedIn is true', () => {
		let props = {
			loggedIn: true
		};
		const wrapper = shallow(<Navigation {...props} />);
		expect(wrapper.find('.logout').length).toBe(1);
	});

	it('log user out when logout link is clicked', () => {
		let props = {
			loggedIn: true
		};
		const logOut = jest.fn();
		const wrapper = shallow(<Navigation dispatch={logOut} {...props} />);
		const link = wrapper.find('.logout');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(logOut).toHaveBeenCalled();
	});

});
