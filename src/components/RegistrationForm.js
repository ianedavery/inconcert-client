import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './Input';
import {required, nonEmpty, matches, isTrimmed} from '../validators';
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
	onSubmit(values) {
		const {username, password} = values;
		const user = {username, password};
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}

	render() {
		return (
			<form className='registration-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor='username' aria-label='username'></label>
				<Field component={Input} type='text' name='username' validate={[required, nonEmpty, isTrimmed]} />

				<label htmlFor='password' aria-label='password'></label>
				<Field component={Input} type='password' name='password' validate={[required, nonEmpty, isTrimmed]}autocomplete='off' />

				<label htmlFor='confirm' aria-label='confirm password'></label>
				<Field component={Input} type='password' name='confirm' validate={[required, nonEmpty, matchesPassword]} autocomplete='off' />

				<div className='button-container'>	
					<button type='submit' disabled={this.props.pristine || this.props.submitting}>signup</button>
				</div>

			</form>
		);
	}
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);