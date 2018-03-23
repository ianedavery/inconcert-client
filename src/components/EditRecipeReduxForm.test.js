import React from 'react';
import {shallow} from 'enzyme';

import {EditRecipeReduxForm} from './EditRecipeReduxForm';

describe('<EditRecipeReduxForm />', () => {

	let props = {
		dispatch: function () {return(null)},
		handleSubmit: function () {return null}
	};

	it('renders without crashing', () => {
		shallow(<EditRecipeReduxForm {...props} />);
	});

	it('should call fetchRecipieDetails when mounted', () => {
		let callBack = jest.fn();
		const wrapper = shallow(<EditRecipeReduxForm {...props} dispatch={callBack} />);
		console.log(wrapper.debug());
		expect(wrapper).toBeDefined();
 		expect(callBack).toHaveBeenCalled();
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
		const editRecipie = jest.fn();
		const wrapper = shallow(<EditRecipeReduxForm dispatch={editRecipie(value)} {...props} />);
		const link = wrapper.find('.edit-recipe-form');
		link.simulate('submit', {
			preventDefault() {}
		});
		expect(editRecipie).toHaveBeenCalledWith(value);
	});

	it('should cancel edit when button is clicked', () => {
		let callBack = jest.fn();
		const wrapper = shallow(<EditRecipeReduxForm {...props} history={callBack} />);
		const link = wrapper.find('.cancel-button');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callBack).toHaveBeenCalled();
	});

});
