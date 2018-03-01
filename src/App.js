import React from 'react';
import {connect} from 'react-redux';

import {BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Register from './components/Register';
import RecipieList from './components/RecipieList';
import PublicRecipieList from './components/PublicRecipieList';
import AddRecipie from './components/AddRecipie';
import RecipieDetails from './components/RecipieDetails';
import PublicRecipieDetails from './components/PublicRecipieDetails';

import {refreshAuthToken} from './actions/auth';

export class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }
    render() {
    return (
      	<Router>
            <div>
      	    	<Navigation />
                <Switch>
        	      	<Route exact path='/' component={LandingPage} />
                    <Route path='/dashboard' component={Dashboard} />
        	      	<Route path='/login' component={Login} />
        	      	<Route path='/register' component={Register} />
                    <Route path='/recipielist' component={RecipieList} />
                    <Route path='/publicrecipielist' component={PublicRecipieList} />
                    <Route path='/addrecipie' component={AddRecipie} />
                    <Route path='/recipiedetails/:recipieId' component={RecipieDetails} />
                    <Route path='/publicrecipiedetails/:recipieId' component={PublicRecipieDetails} />
                </Switch>
            </div>
        </Router> 
    );
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));