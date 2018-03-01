import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
import './Navigation.css';

export class Navigation extends React.Component {

	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {

		let logOut;
		let logIn;
		let register;

		if(this.props.loggedIn) {
			logOut = (
				<li onClick={() => this.logOut()}>log out</li>
			);
		}

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
	      		<p><Link to='/'>RecipieBox</Link></p>
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

export default withRouter(connect(mapStateToProps)(Navigation));