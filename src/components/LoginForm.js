import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {

	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password));
	}

	render() {

		let error;
		if(this.props.error) {
			error = (
				<div className='form-error' aria-live='polite'>
					{this.props.error}
				</div>
			);
		}

		return (

			<form className='login-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				{error}
				<label htmlFor='username' aria-label='username'></label>
				<Field component={Input} type='text' name='username' validate={[required, nonEmpty]} />

				<label htmlFor='password' aria-label='password'></label>
				<Field component={Input} type='password' name='password' validate={[required, nonEmpty]} />

				<div className='button-container'>
					<button type='submit' disabled={this.props.pristine || this.props.submitting}>login</button>
				</div>

			</form>
		);
	}
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);