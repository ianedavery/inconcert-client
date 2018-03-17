import React from 'react';
import {shallow} from 'enzyme';

import RecipieList from './RecipieList';

describe('<RecipieList />', () => {
	it('renders without crashing', () => {
		shallow(<RecipieList />);
	});
});