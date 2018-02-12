import React from 'react';
import RequiresLogin from './RequiresLogin';

export function RecipieDetails(props) {
	return (
        <div>{props.match.params.recipieId}</div>
	)
}

export default RequiresLogin()(RecipieDetails);