import React from 'react';
import {shallow} from 'enzyme';

import {RecipieList} from '../RecipieList';

describe('<RecipieList />', () => {

	it('renders without crashing', () => {
		let props = {
			recipies: 'no recipes',
			dispatch: function () {return(null)}
		};
		shallow(<RecipieList {...props} />);
	});

	it('should render no recipe message if this.props.recipies is equal to "no recipes"', () => {
		let props = {
			recipies: 'no recipes',
			dispatch: function () {return(null)}
		};
		const wrapper = shallow(<RecipieList {...props} />);
		expect(wrapper.find('.no-recipe-message').length).toBe(1);
	});

	it('should render recipe list if this.props.recipies returns recipies', () => {
		let props = {
			recipies: [
				{
					name: 'waffles',
			    	instructions: 'mix it all togther',
			    	ingredients: 
			    	{
			    		ingredient: 'flour',
			    		measurement: '1 cup'
			    	}
			    }
			],
			dispatch: function () {return(null)}
		};
		const wrapper = shallow(<RecipieList {...props} />);
		expect(wrapper.find('.your-recipies').length).toBe(1);
	});

	it('should call fetchRecipies and recipiesSearchTerm when mounted', () => {
		let props = {
			recipies: [
				{
					name: 'waffles',
			    	instructions: 'mix it all togther',
			    	ingredients: 
			    	{
			    		ingredient: 'flour',
			    		measurement: '1 cup'
			    	}
			    }
			],
			dispatch: function () {return(null)}
		};
		let callBack = jest.fn();
		const wrapper = shallow(<RecipieList {...props} dispatch={callBack} />);
		expect(wrapper).toBeDefined();
 		expect(callBack).toHaveBeenCalled();
	});

	it('should call recipiesSearchTerm when an onChange event occurs', () => {
		let props = {
			recipies: [
				{
					name: 'waffles',
			    	instructions: 'mix it all togther',
			    	ingredients: 
			    	{
			    		ingredient: 'flour',
			    		measurement: '1 cup'
			    	}
			    }
			],
			dispatch: function () {return(null)}
		};
		let callBack = jest.fn();
		const wrapper = shallow(<RecipieList {...props} dispatch={callBack} />);
		const link = wrapper.find('.search-form');
		link.simulate('onChange', {
			preventDefault() {}
		});
		expect(callBack).toHaveBeenCalled();
	});

});