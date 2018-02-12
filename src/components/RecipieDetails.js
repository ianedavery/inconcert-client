import React from 'react';
import RequiresLogin from './RequiresLogin';

import RecipieName from './RecipieName';

export class RecipieDetails extends React.Component {

	render() {

		return (
			<RecipieName  id={this.props.location.pathname.slice(16)} />
		)
	}
}

export default RequiresLogin()(RecipieDetails);