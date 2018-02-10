import React from 'react';
import RequiresLogin from './RequiresLogin';

export class AddRecipieForm extends React.Component {

	render() {
		return (
            <div>
            	<input placeholder='input new recipie here' />
            </div>
		)
	}
}

export default RequiresLogin()(AddRecipieForm);