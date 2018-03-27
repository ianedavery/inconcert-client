import React from 'react';
import {shallow} from 'enzyme';

import {PublicRecipieName} from '../PublicRecipieName';

describe('<PublicRecipieName />', () => {

	let props = {
		dispatch: function () {return null},
		recipie: {
			ingredients: undefined				
		}
	};

	it('renders without crashing', () => {
		shallow(<PublicRecipieName {...props} />);
	});

	it('should call fetchRecipieDetails when mounted', () => {
		let callBack = jest.fn();		
		const wrapper = shallow(<PublicRecipieName {...props} dispatch={callBack} />);
		expect(wrapper).toBeDefined();
 		expect(callBack).toHaveBeenCalled();
	});

	it('should call ratingChanged when clicked', () => {
		let ratingChanged = jest.fn();
		const wrapper = shallow(<PublicRecipieName {...props} dispatch={ratingChanged} />);
		const link = wrapper.find('.react-stars');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(ratingChanged).toHaveBeenCalled();
	});

	it('should not render ingredient list if props.recipie.ingredients is undefined', () => {
		const wrapper = shallow(<PublicRecipieName {...props} />);
		expect(wrapper.find('.public-recipie-name-ingredient-list').length).toBe(0);		
	});	

});