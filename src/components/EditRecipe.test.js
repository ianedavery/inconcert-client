import React from 'react';
import {shallow} from 'enzyme';

import EditRecipe from './EditRecipe';

describe('<EditRecipe', () => {
	it('should render without crashing', () => {
		shallow(<EditRecipe />);
	});
});