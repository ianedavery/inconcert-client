import React from 'react';
import {shallow, mount} from 'enzyme';
import {HashRouter as Router} from 'react-router-dom'

import {App} from './App';

describe('<App />', () => {

	it('renders without crashing', () => {
		shallow(<App />);
	});

	/*it('should test something', () => {
		let props = {
			loggedIn: true
		};
		const callBack = jest.fn();
		const wrapper = mount(<Router><App startPeriodicRefresh={callBack} {...props} /></Router>).dive().dive();
		console.log(wrapper.debug());
		wrapper.update();
		//wrapper.instance().componentWillReceiveProps();
		expect(callBack).toHaveBeenCalled();
	});*/

});

/*describe('<App />', () => {
	let props;
	let mountedApp;
	const App = () => {
		if(!mountedApp) {
			mountedApp = mount(
				<App {...props} />
			);
		}
		return mountedApp;
	}
	beforeEach(() => {
		props = {
			loggedIn: undefined
		};
		mountedApp = undefined;
	});
	it('always renders a div', () => {
		const divs = App().find('div');
		expect(divs.length).toBeGreaterThan(0);
	});
});*/
