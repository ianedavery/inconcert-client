import React from 'react';
import {shallow} from 'enzyme';

import PublicRecipieDetails from './PublicRecipieDetails';

describe('<PublicRecipieDetails />', () => {
	it('renders without crashing', () => {
		shallow(<PublicRecipieDetails />);
	});
});