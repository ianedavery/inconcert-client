import React from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
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
import EditRecipe from './components/EditRecipe';

import {refreshAuthToken} from './actions/auth';

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {

    componentWillReceiveProps(nextProps) {
        //if loggedIn is true, call startPeriodicRefresh.
        if (nextProps.loggedIn) {
            this.startPeriodicRefresh();
        //if loggedIn returns false, call the stopPeriodicRefresh method.
        } else if (!nextProps.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    //when App.js is unmounted, call the stopPeriodicRefresh method, 
    //which will stop the user's token from being refreshed
    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    //create the this.refreshInterval variable and set it's value
    //to refresh the user's token every hour
    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        //if the startPeriodicRefresh method has not be called, 
        //and this.refreshInterval is undefined, stop and do nothing
        if (!this.refreshInterval) {
            return;
        }
        //if this.refreshInteval has been created,
        //clear the interval causing token refreshes
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
                        <Route path='/editrecipie/:recipieId' component={EditRecipe} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    //hasAuthToken: state.auth.authToken !== null,
    //set assign loggedIn a boolean value on whether state.auth.currenUser exists
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);