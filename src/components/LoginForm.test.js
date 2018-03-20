import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoginForm} from './LoginForm';

describe('<LoginForm />', () => {

	it('renders without crashing', () => {
		let props = {
			handleSubmit: function (){console.log('hello')}
		};
		shallow(<LoginForm {...props} />);
	});

	it('creates new element for the error if this.props.error is true', () => {
		let props = {
			error: true,
			handleSubmit: function (){console.log('hello')}
		};
		const wrapper = shallow(<LoginForm {...props} />);
		console.log(wrapper.debug());
		expect(wrapper.find('.form-error').length).toBe(1);
	});

	it('should call the login action when the form is submitted', () => {
		let props = {
			handleSubmit: function (){console.log('hello')}
		};
		const logIn = jest.fn();
		const wrapper = shallow(<LoginForm dispatch={logIn()} {...props} />);
		const link = wrapper.find('.login-form');
		link.simulate('submit', {
			preventDefault() {}
		});
		expect(logIn).toHaveBeenCalled();
	});

});
