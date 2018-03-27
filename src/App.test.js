import React from 'react';
import {shallow, mount} from 'enzyme';
import {HashRouter as Router} from 'react-router-dom'

import {App} from './App';

describe('<App />', () => {

	it('renders without crashing', () => {
		shallow(<App />);
	});
});