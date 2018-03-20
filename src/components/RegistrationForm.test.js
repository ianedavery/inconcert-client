import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationForm} from './RegistrationForm';

describe('<RegistrationForm />', () => {

	it('renders without crashing', () => {
		let props = {
			handleSubmit: function (){console.log('hello')}
		};
		shallow(<RegistrationForm {...props} />);
	});

	it('should register and login the user when the form is submitted', () => {
		let props = {
			handleSubmit: function (){console.log('hello')}
		};
		const registerUser = jest.fn();
		const wrapper = shallow(<RegistrationForm dispatch={registerUser()} {...props} />);
		const link = wrapper.find('.registration-form');
		link.simulate('submit', {
			preventDefault() {}
		});
		expect(registerUser).toHaveBeenCalled();
	});

});