import React from 'react';
import RequiresLogin from './RequiresLogin';
import PublicRecipieName from './PublicRecipieName';
import {withRouter} from 'react-router-dom';

export class PublicRecipieDetails extends React.Component {

	render() {
		return (
			<PublicRecipieName id={this.props.location.pathname.slice(22)} />
		)
	}
}

export default withRouter(RequiresLogin()(PublicRecipieDetails));