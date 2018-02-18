import React from 'react';
import RequiresLogin from './RequiresLogin';

import AddRecipieForm from './AddRecipieForm';

export class AddRecipie extends React.Component {

	render() {
		return (
            <div>
            	<AddRecipieForm history={this.props.history.push} />
            </div>
		)
	}
}

export default RequiresLogin()(AddRecipie);