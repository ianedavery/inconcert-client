import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import LandingPage from './components/LandingPage';

export default function App() {
    return (
    	<Router>
      		<Route exact path='/' component={LandingPage} />
      	</Router> 
    );
}