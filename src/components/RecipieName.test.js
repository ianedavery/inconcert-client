import React from 'react';
import {shallow} from 'enzyme';

import RecipieName from './RecipieName';

describe('<RecipieName />', () => {
	it('renders without crashing', () => {
		shallow(<RecipieName />);
	});
});