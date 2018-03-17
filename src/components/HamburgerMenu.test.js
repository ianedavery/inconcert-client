import React from 'react';
import {shallow} from 'enzyme';

import HamburgerMenu from './HamburgerMenu';

describe('<HamburgerMenu />', () => {
	it('renders without crashing', () => {
		shallow(<HamburgerMenu />);
	});
});
