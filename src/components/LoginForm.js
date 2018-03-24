import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {

	//when the login form is submitted, dispatch the login action
	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password));
	}

	render() {

		//if there is an error alert the user
		if(this.props.error) {
			alert(this.props.error);
		}

		return (
			<div>
				<form className='login-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

					<div className='username-container'>
						<label className='username' htmlFor='username'>username</label>
						<Field component={Input} type='text' name='username' validate={[required, nonEmpty]} />
					</div>

					<div className='password-container'>
						<label className='password' htmlFor='password'>password</label>
						<Field component={Input} type='password' name='password' validate={[required, nonEmpty]} />
					</div>
					
					<div className='button-container'>
						<button className='login-button' type='submit' disabled={this.props.pristine || this.props.submitting}>login</button>
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