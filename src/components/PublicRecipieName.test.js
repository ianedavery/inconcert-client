import React from 'react';
import {shallow} from 'enzyme';

import PublicRecipieName from './PublicRecipieName';

describe('<PublicRecipieName />', () => {
	it('renders without crashing', () => {
		shallow(<PublicRecipieName />);
	});
});