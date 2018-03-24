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

	it('should call the login action when the form is submitted', () => {
		let props = {
			handleSubmit: function (){console.log('hello')}
		};
		let values = {
			username: 'ian',
			password: '123'
		}
		const logIn = jest.fn();
		const wrapper = shallow(<LoginForm dispatch={logIn(values)} {...props} />);
		const link = wrapper.find('.login-form');
		link.simulate('submit', {
			preventDefault() {}
		});
		expect(logIn).toHaveBeenCalledWith(values);
	});

});
