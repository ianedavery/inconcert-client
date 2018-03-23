import React from 'react';
import {shallow} from 'enzyme';

import {AltNavigation} from './AltNavigation';

describe('<AltNavigation />', () => {
	it('renders without crashing', () => {
		shallow(<AltNavigation />);
	});
});
