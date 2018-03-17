import React from 'react';
import {shallow} from 'enzyme';

import BottomNav from './BottomNav';

describe('<BottomNav />', () => {
	it('renders without crashing', () => {
		shallow(<BottomNav />);
	});
});
