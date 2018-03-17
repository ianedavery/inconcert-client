import React from 'react';
import {shallow} from 'enzyme';

import AddRecipieForm from './AddRecipieForm';

describe('<AddRecipieForm />', () => {
	it('renders without crashing', () => {
		shallow(<AddRecipieForm />);
	});
});
