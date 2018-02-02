import React from 'react';

import Footer from './Footer';
import Main from './Main';
import Navigation from './Navigation';

export default function LandingPage(props) {
	return (
		<div>
			<Navigation />
			<Main />
			<Footer />
		</div>
	);
}