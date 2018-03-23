import React from 'react';
import {shallow} from 'enzyme';

import {PublicRecipieList} from './PublicRecipieList';

describe('<PublicRecipieList />', () => {

	let props = {
		publicRecipies: 'hello',
		dispatch: function () {return(null)}
	};

	it('renders without crashing', () => {
		shallow(<PublicRecipieList {...props} />);
	});

	it('should call fetchPublicRecipies and recipiesSearchTerm when mounted', () => {
		let callBack = jest.fn();
		const wrapper = shallow(<PublicRecipieList {...props} dispatch={callBack} />);
		expect(wrapper).toBeDefined();
 		expect(callBack).toHaveBeenCalled();
	});

	it('should call recipiesSearchTerm when an onChange event occurs', () => {
		let callBack = jest.fn();
		const wrapper = shallow(<PublicRecipieList {...props} dispatch={callBack} />);
		const link = wrapper.find('.search-form');
		link.simulate('onChange', {
			preventDefault() {}
		});
		expect(callBack).toHaveBeenCalled();
	});	

});