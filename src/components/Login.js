import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './LoginForm';

import './Login.css';

export class Login extends React.Component {

	render() {

		//if the user is logged in, redirect them directly to their dashboard
		if(this.props.loggedIn) {
			return (
				<Redirect className='dashboard-redirect' to='/dashboard' />
			);
		}

		return (
			<div>
				<LoginForm />
				<div className='test-user-container'>
					<p className='test-user'>Test User<br />username: 123<br />password: 456</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);