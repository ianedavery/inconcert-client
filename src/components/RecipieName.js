import React from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {deleteRecipie} from '../actions/deleteRecipie';
import {publicRecipie} from '../actions/makeRecipiePublic';
import {privateRecipie} from '../actions/makeRecipiePrivate';

import EditRecipieForm from './EditRecipieForm';

export class RecipieName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		}
		this.toggleEdit = this.toggleEdit.bind(this)
	}

	toggleEdit() {
		this.setState({
			isEditing: !this.state.isEditing
		})
	}

	componentWillMount() {
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	deleteRecipie(id) {
		this.props.dispatch(deleteRecipie(this.props.id));
		this.props.history('/recipielist');
	}

	publicRecipie(id) {
		this.props.dispatch(publicRecipie(this.props.id));
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	privateRecipie(id) {
		this.props.dispatch(privateRecipie(this.props.id));
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	render() {

		if(this.state.isEditing) {
			return(
				<div>
					<EditRecipieForm  
						toggle={this.toggleEdit} 
						name={this.props.recipie.name}
						instructions={this.props.recipie.instructions}
						ingredients={this.props.recipie.ingredients}
						id={this.props.id}
					/>
				</div>
			)
		}

		let newArray = this.props.recipie.ingredients;

		let ingredient;

		if (newArray !== undefined) {
			ingredient = newArray.map((ingredients, index) => (
				<li key={index}>
					{ingredients.ingredient} {ingredients.measurement}
				</li>
			));
		}

		let makePublic;
		let makePrivate;

		if(this.props.recipie.public === false) {
			makePublic = (
				<button type='button' onClick={id => this.publicRecipie(id)}>Make Public</button>
			);
		}

		if(this.props.recipie.public === true) {
			makePrivate = (
				<button type='button' onClick={id => this.privateRecipie(id)}>Make Private</button>
			);
		}

		return (
			<div>
				<section>
		        	<h2>{this.props.recipie.name}</h2>
	        	</section>
	        	<section>
	        		<h3>Ingredients</h3>
	        		<ul>{ingredient}</ul>
        		</section>
		        <section>
		        	<h3>Instructions</h3>
		        	<p>{this.props.recipie.instructions}</p>
	        	</section>
	        	<button type='submit' onClick={id => {if(window.confirm('Are you sure you want to delete?')) {this.deleteRecipie(id)};}}>Delete Recipie</button>
	        	<button type='button' onClick={this.toggleEdit}>edit</button>
	        	{makePublic}
	        	{makePrivate}
	        </div>
		)
	}
}

RecipieName.defaultProps = {
	recipie: ''
}

const mapStateToProps = state => {
	return {
		recipie: state.recipie.recipie[0]
	};
};

export default RequiresLogin()(connect(mapStateToProps)(RecipieName));