import React from 'react';
import {shallow} from 'enzyme';

import SearchForm from '../SearchForm';

describe('<SearchForm />', () => {
	it('renders without crashing', () => {
		shallow(<SearchForm />);
	});
});