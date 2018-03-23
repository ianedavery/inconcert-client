import React from 'react';
import {shallow, mount} from 'enzyme';

import {RecipieName} from './RecipieName';

describe('<RecipieName />', () => {

	it('renders without crashing', () => {
		let props = {
			dispatch: function () {return null}
		};
		shallow(<RecipieName {...props} />);
	});

	it('should call fetchRecipieDetails when mounted', () => {
		let props = {
			dispatch: function () {return null}
		};
		let callBack = jest.fn();		
		const wrapper = shallow(<RecipieName {...props} dispatch={callBack} />);
		console.log(wrapper.debug());
		expect(wrapper).toBeDefined();
 		expect(callBack).toHaveBeenCalled();
	});

	it('should not render ingredient list if props.recipie.ingredients is undefined', () => {
		let props = {
			dispatch: function () {return null},
			recipie: {
				ingredients: undefined				
			}
		};
		const wrapper = shallow(<RecipieName {...props} />);
		expect(wrapper.find('.recipie-name-ingredient-list').length).toBe(0);		
	});

	it('should call deleteRecipie if delete button is clicked', () => {
		let props = {
			dispatch: function () {return null}
		};
		let deleteRecipie = jest.fn();
		const wrapper = shallow(<RecipieName {...props} dispatch={deleteRecipie}/>);
		const link = wrapper.find('.bottom-nav');
		link.simulate('onClick', {
			preventDefault() {}
		});
		expect(deleteRecipie).toHaveBeenCalled();
	});

});