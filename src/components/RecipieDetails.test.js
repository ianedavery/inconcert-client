import React from 'react';
import {shallow} from 'enzyme';

import RecipieDetails from './RecipieDetails';

describe('<RecipieDetails />', () => {
	it('renders without crashing', () => {
		shallow(<RecipieDetails />);
	});
});