import React from 'react';
import RequiresLogin from './RequiresLogin';

export function RecipieDetails(props) {
	console.log(props.match.params.recipiedetails.recipieId);
	return (
        <div></div>
	)
}

export default RequiresLogin()(RecipieDetails);