import React from 'react';
import RequiresLogin from './RequiresLogin';
import PublicRecipieName from './PublicRecipieName';

export class PublicRecipieDetails extends React.Component {

	render() {
		return (
			<PublicRecipieName id={this.props.location.pathname.slice(22)} history={this.props.history.push} />
		)
	}
}

export default RequiresLogin()(PublicRecipieDetails);