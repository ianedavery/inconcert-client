import React from 'react';
import {shallow} from 'enzyme';

import AddRecipie from './AddRecipie';

describe('<AddRecipie />', () => {
	it('renders without crashing', () => {
		shallow(<AddRecipie />);
	});
});