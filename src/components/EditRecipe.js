import React from 'react';
import {withRouter} from 'react-router-dom';
import RequiresLogin from './RequiresLogin';

import EditRecipeReduxForm from './EditRecipeReduxForm';

export class EditRecipe extends React.Component {
	render() {
		return (
			<EditRecipeReduxForm id={this.props.location.pathname.slice(13)} history={this.props.history.push} />
		)
	}
}

export default withRouter(RequiresLogin()(EditRecipe));