import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
import './Navigation.css';

export class Navigation extends React.Component {

	//when an onClick event occurs on .logout, dispatch clearAuth and call clearAuthToken
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {

		let logOut;
		let logIn;
		let register;

		//if the user is logged in assign value to logOut
		if(this.props.loggedIn) {
			logOut = (
				<li className='logout' onClick={() => this.logOut()}>logout</li>
			);
		}

		//if the user is not logged in, assign value to logIn and register
		if(!(this.props.loggedIn)) {
			logIn = (
				<li className='nav-list-item-one'><Link to='/login'>login</Link></li>
			);
			register = (
				<li className='nav-list-item-two'><Link to='/register'>register</Link></li>
			);
		}

		return (
	    	<nav className='navigation'>
	      		<p><Link to='/'>RecipeBox</Link></p>
	      		<ul>
	        		{logOut}
	        		{logIn}
	        		{' '}
	        		{register}
	      		</ul>
	    	</nav>
		);
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navigation);