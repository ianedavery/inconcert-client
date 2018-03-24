import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {withRouter} from 'react-router-dom';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './Input';
import {required, nonEmpty, matches, isTrimmed} from '../validators';
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
	
	//when the registration form is submitted, dispatch the registerUser action then the login action
	onSubmit(values) {
		const {username, password} = values;
		const user = {username, password};
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}

	render() {
		return (
			<div>
				<form className='registration-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					
					<div className='registration-username-container'>
						<label className='username' htmlFor='username'>username</label>
						<Field component={Input} type='text' name='username' validate={[required, nonEmpty, isTrimmed]} />
					</div>
					
					<div className='registration-password-conatiner'>
						<label className='password' htmlFor='password'>password</label>
						<Field component={Input} type='password' name='password' validate={[required, nonEmpty, isTrimmed]}autocomplete='off' />
					</div>
					
					<div className='registration-confirm-container'>
						<label className='confirm' htmlFor='confirm'>confirm</label>
						<Field component={Input} type='password' name='confirm' validate={[required, nonEmpty, matchesPassword]} autocomplete='off' />
					</div>
					
					<div className='button-container'>	
						<button className='registration-button' type='submit' disabled={this.props.pristine || this.props.submitting}>signup</button>
					</div>
				</form>
				<div className='login-bottom-nav' id='bottom-nav' />
			</div>
		);
	}
}

export default withRouter(reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm));