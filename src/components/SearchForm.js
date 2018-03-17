import React from 'react';
import RequiresLogin from './RequiresLogin';
import {withRouter} from 'react-router-dom';

export function SearchForm(props) {
	return (
        <form htmlFor='search' onSubmit={event => event.preventDefault()}>
        	<label aria-label='recipie search' />
            <input type='search' id='search' name='search' placeholder='search recipes' onChange={e => props.onChange(e.target.value)} />
        </form>
	)
}

export default withRouter(RequiresLogin()(SearchForm));