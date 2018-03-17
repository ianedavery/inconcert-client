import React from 'react';
import {shallow} from 'enzyme';

import EditRecipeReduxForm from './EditRecipeReduxForm';

describe('<EditRecipeReduxForm />', () => {
	it('renders without crashing', () => {
		shallow(<EditRecipeReduxForm />);
	});
});
