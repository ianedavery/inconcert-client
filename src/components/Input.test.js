import React from 'react';
import {shallow} from 'enzyme';

import Input from './Input';

describe('<Input />', () => {

	let props = {
		meta: {
			touched: true
		},
		input: {
			name: 'waffles'
		},
		label: 'recipe name'
	};

	it('should render without crashing', () => {
		shallow(<Input {...props} />);
	});

	it('should render error if props.meta.touched is true', () => {
		const wrapper = shallow(<Input {...props} />);
		expect(wrapper.find('.form-error').length).toEqual(1);
	});

});