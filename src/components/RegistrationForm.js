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
				<label htmlFor='username'>username</label>
				<Field component={Input} type='text' name='username' validate={[required, nonEmpty, isTrimmed]} autoFocus />

				<label htmlFor='password'>password</label>
				<Field component={Input} type='text' name='password' validate={[required, isTrimmed]} />

				<label htmlFor='confirm-password'>confirm</label>
				<Field component={Input} type='text' name='confirm-password' validate={[required, nonEmpty, matchesPassword]} />

				<button type='submit' disabled={this.props.pristine || this.props.submitting}>signup</button>
			</form>
		);
	}
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);