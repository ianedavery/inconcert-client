import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './LoginForm';

import './Login.css';

export function Login(props) {
	if(props.loggedIn) {
		return (
			<Redirect to='/dashboard' />
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

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);