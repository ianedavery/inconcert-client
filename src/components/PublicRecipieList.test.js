import React from 'react';
import {shallow} from 'enzyme';

import PublicRecipieList from './PublicRecipieList';

describe('<PublicRecipieList />', () => {
	it('renders without crashing', () => {
		shallow(<PublicRecipieList />);
	});
});