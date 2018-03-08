import React from 'react';
import RequiresLogin from './RequiresLogin';
import {editRecipie} from '../actions/editRecipie';

import './EditRecipeForm.css';

export class EditRecipieForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			name: this.props.name,
			instructions: this.props.instructions,
			ingredients: this.props.ingredients
		}
	}

	updateName(name) {
		this.setState({
			name: name
		})
	}

	updateInstructions(instructions) {
		this.setState({
			instructions: instructions
		})
	}

	updateIngredient(_id, ingredient) {
	    this.setState({
	    	ingredients: this.state.ingredients.map(
	    		el => el._id === _id ? Object.assign({}, el, {ingredient: ingredient}) : el)
		})
	}

	/*addNewIngredient(ingredient) {
		let newArr = this.state.ingredients.slice();
		newArr.push({ingredient: ingredient});
		this.setState({ingredients: newArr})
		/*this.setState({
			ingredients: Object.assign({}, this.state.ingredients, {ingredient: ingredient})
		})
	}*/

	updateMeasurement(_id, measurement) {
	    this.setState({
	    	ingredients: this.state.ingredients.map(
	    		el => el._id === _id ? Object.assign({}, el, {measurement: measurement}) : el)
		})
	}

	handleClick(id, data) {
		this.props.dispatch(editRecipie(this.props.id, this.state));
	}

	render() {

		//let newIngredient = this.refs.newingredient;

		const ingredient = this.props.ingredients.map((ingredients, index) => (
			<div key={index} className='ingredients-container'>
				<label>Ingredient {index + 1}</label>
				<input type='text' defaultValue={ingredients.ingredient} onChange={e => this.updateIngredient(ingredients._id, e.target.value)} />

				<label className='measurement-label'>Measurement {index + 1}</label>
				<input type='text' defaultValue={ingredients.measurement} onChange={e => this.updateMeasurement(ingredients._id, e.target.value)} />
			</div>
		))
		return(
			<div className='edit-form'>
				<form id='edit-form'>
					<legend className='main-legend'>Edit Recipe</legend>
					<label>Recipe Name</label>
					<input type='text' defaultValue={this.state.name} onChange={e => this.updateName(e.target.value)} />

					<label className='ingredients-label'>Ingredients</label>
					{ingredient}

					<label className='instructions-label'>Instructions</label>
					<textarea type='text' defaultValue={this.state.instructions} onChange={e => this.updateInstructions(e.target.value)} />

					{/*<label>ingredient</label>
					<input ref='newingredient' type='text' onChange={e => this.addNewIngredient(e.target.value)} />*/}

					<div className='edit-button-container'>
						<button className='edit-button' type='submit' onClick={(id, data) => this.handleClick(id, data)} /*onClick={this.addNewIngredient(newIngredient)}*/>edit</button>
					</div>
				</form>
				<div className='cancel-edit-button-container'>
					<button className='cancel-button' type='button' onClick={this.props.toggle}>cancel</button>
		    	</div>
		    	<div className='bottom-nav' id='bottom-nav' />
			</div>
		)
	}
}

export default RequiresLogin()(EditRecipieForm);