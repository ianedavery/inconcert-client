import React from 'react';
import {shallow} from 'enzyme';

import {AddRecipieForm} from './AddRecipieForm';

describe('<AddRecipieForm />', () => {

	let props = {
		handleSubmit: function (){return null}
	};	

	it('renders without crashing', () => {
		shallow(<AddRecipieForm {...props} />);
	});

	it('should call onSubmit when the form is submitted', () => {
		let value = {
			name: 'waffles',
			instructions: 'mix',
			ingredients: {
				ingredient: 'flour',
				measurment: '1 cup'
			}
		};
		const addRecipie = jest.fn();
		const wrapper = shallow(<AddRecipieForm dispatch={addRecipie(value)} {...props} />);
		const link = wrapper.find('.add-recipe-form');
		link.simulate('submit', {
			preventDefault() {}
		});
		expect(addRecipie).toHaveBeenCalledWith(value);
	});	

});
