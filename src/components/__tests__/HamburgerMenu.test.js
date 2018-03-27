import React from 'react';
import {shallow} from 'enzyme';

import {HamburgerMenu} from '../HamburgerMenu';

describe('<HamburgerMenu />', () => {

	it('renders without crashing', () => {
		shallow(<HamburgerMenu />);
	});

	it('should render the logout icon when props.loggedIn is true', () => {
		let props = {
			loggedIn: true
		};
		const wrapper = shallow(<HamburgerMenu {...props} />);
		expect(wrapper.find('.logout-icon').length).toBe(1);
	});

	it('log user out when logout icon is clicked', () => {
		let props = {
			loggedIn: true
		};
		const logOut = jest.fn();
		const wrapper = shallow(<HamburgerMenu dispatch={logOut} {...props} />);
		const link = wrapper.find('.logout-icon');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(logOut).toHaveBeenCalled();
	});

	it('calls publicRecipie and fetchRecipieDetails when \'public\' div is clicked', () => {
		let props = {
			public: false
		};
		const publicRecipie = jest.fn();
		const wrapper = shallow(<HamburgerMenu {...props} dispatch={publicRecipie} />);
		const link = wrapper.find('.public');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(publicRecipie).toHaveBeenCalled();
	});		

	it('calls privateRecipie and fetchRecipieDetails when \'private\' div is clicked', () => {
		let props = {
			public: true
		};
		const privateRecipie = jest.fn();
		const wrapper = shallow(<HamburgerMenu {...props} dispatch={privateRecipie} />);
		const link = wrapper.find('.private');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(privateRecipie).toHaveBeenCalled();
	});

	it('should render \'public\' div if this.props.public is false', () => {
		let props = {
			public: false
		};
		const wrapper = shallow(<HamburgerMenu {...props} />);
		expect(wrapper.find('.public').length).toBe(1);
	});

	it('should render \'private\' div if this.props.public is true', () => {
		let props = {
			public: true
		};
		const wrapper = shallow(<HamburgerMenu {...props} />);
		expect(wrapper.find('.private').length).toBe(1);
	});	

});
