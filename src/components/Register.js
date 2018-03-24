import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './RegistrationForm';

import './Register.css';

export class Register extends React.Component {

	render() {

		//if the user is logged in, redirect them directly to their dashboard
		if(this.props.loggedIn) {
			return (
				<Redirect className='dashboard-redirect' to='/dashboard' />
			);
		}

		return (
			<RegistrationForm className='registration-form' />
		);

	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Register);