import React from 'react';

export default function Login(props) {
	return (	
    	<main>
	      	<form name='login-form' id='login-form'>
		        <fieldset form='login-form'>
		          <legend>login</legend>

		          <label for='username' aria-label='username'></label>
		          <input type='text' name='username' id='username' form='login-form' placeholder='username' />

		          <label for='password' aria-label='password'></label>
		          <input type='text' name='password' id='password' form='login-form' placeholder='password' />

		        </fieldset>
		        <button form='login-form' type='submit' name='login-submit-button'>login</button>
	      	</form>
      	</main>
	);
}