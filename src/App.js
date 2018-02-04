import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Register from './components/Register';

export default function App() {
    return (
    	<Router>
    		<body>
	    		<Navigation />
	      		<Route exact path='/' component={LandingPage} />
	      		<Route path='/login' component={Login} />
	      		<Route path='/register' component={Register} />
      		</body>
      	</Router> 
    );
}