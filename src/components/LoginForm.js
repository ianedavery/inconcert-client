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
			<div>
				<form className='login-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					{error}
					<label className='username' htmlFor='username'>username</label>
					<Field component={Input} type='text' name='username' validate={[required, nonEmpty]} />

					<label className='password' htmlFor='password'>password</label>
					<Field component={Input} type='password' name='password' validate={[required, nonEmpty]} />

					<div className='button-container'>
						<button type='submit' disabled={this.props.pristine || this.props.submitting}>login</button>
					</div>

				</form>
		    	<div className='login-bottom-nav' id='bottom-nav' />
			</div>
		);
	}
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);