import React from 'react';
import {shallow} from 'enzyme';

import {BottomNav} from './BottomNav';

describe('<BottomNav />', () => {

	it('renders without crashing', () => {
		shallow(<BottomNav />);
	});

	it('calls publicRecipie and fetchRecipieDetails when \'public\' div is clicked', () => {
		let props = {
			public: false
		};
		const publicRecipie = jest.fn();
		const wrapper = shallow(<BottomNav {...props} dispatch={publicRecipie} />);
		const link = wrapper.find('.public');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(publicRecipie).toHaveBeenCalled();
	});

	it('calls privateRecipie and fetchRecipieDetails when \'private\' div is clicked', () => {
		let props = {
			public: true
		};
		const privateRecipie = jest.fn();
		const wrapper = shallow(<BottomNav {...props} dispatch={privateRecipie} />);
		const link = wrapper.find('.private');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(privateRecipie).toHaveBeenCalled();
	});

	it('should render \'public\' div if this.props.public is false', () => {
		let props = {
			public: false
		};
		const wrapper = shallow(<BottomNav {...props} />);
		expect(wrapper.find('.public').length).toBe(1);
	});

	it('should render \'private\' div if this.props.public is true', () => {
		let props = {
			public: true
		};
		const wrapper = shallow(<BottomNav {...props} />);
		expect(wrapper.find('.private').length).toBe(1);
	});

});
