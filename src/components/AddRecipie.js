import React from 'react';
import RequiresLogin from './RequiresLogin';
import {withRouter} from 'react-router-dom';

import AddRecipieForm from './AddRecipieForm';

import './AddRecipe.css';

export class AddRecipie extends React.Component {

	render() {
		return (
            <div className='add-recipe'>
            	<AddRecipieForm history={this.props.history.push} />
            	<div className='bottom-nav' id='bottom-nav' />
            </div>
		)
	}
}

export default withRouter(RequiresLogin()(AddRecipie));