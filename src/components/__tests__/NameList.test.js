import React from 'react';
import {shallow} from 'enzyme';

import {NameList} from '../NameList';

describe('<NameList />', () => {
	it('renders without crashing', () => {
		shallow(<NameList />);
	});
});
