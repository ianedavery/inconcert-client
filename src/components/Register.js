import React from 'react';

export default function Register(props) {
	return (
	    <main role='main' id='main'>
	      <form name='registration-form' id='registration-form'>
	        <fieldset form='registration-form'>
	          <legend>register</legend>

	          <label for='username' aria-label='username'></label>
	          <input type='text' name='username' id='username' form='registration-form' placeholder='username' />

	          <label for='password' aria-label='password'></label>
	          <input type='text' name='password' id='password' form='registration-form' placeholder='password' />

	          <label for='confirm-password' aria-label='confirm password'></label>
	          <input type='text' name='confirm-password' id='confirm-password' form='registration-form' placeholder='confirm password' />

	        </fieldset>
	        <button form='registration-form' type='submit' name='registration-submit-button'>signup</button>
	      </form>
	    </main>
	);
}