import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './RegistrationForm';

import './Register.css';

export function Register(props) {
	if(props.loggedIn) {
		return (
			<Redirect to='/dashboard' />
		);
	}
	return (
		<RegistrationForm className='registration-form' />
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Register);