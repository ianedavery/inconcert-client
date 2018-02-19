import React from 'react';
import RequiresLogin from './RequiresLogin';

export class EditRecipieForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
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

	updateIngredients(ingredients) {
		this.setState({
			ingredients: ingredients
		})
	}

	render() {

		console.log(this.state);

		const ingredient = this.props.ingredients.map((ingredients, index) => (
			<div key={index}>
				<label>{`Ingredient ${index + 1}`}</label>
				<input type='text' defaultValue={ingredients.ingredient} onChange={e => this.updateIngredients(e.target.value)} />

				<label>{`Measurement ${index + 1}`}</label>
				<input type='text' defaultValue={ingredients.measurement} onChange={e => this.updateIngredients(e.target.value)} />
			</div>
		))

		return(
			<div>
				edit recipie
				<form>
					<label>recipie name</label>
					<input type='text' defaultValue={this.state.name} onChange={e => this.updateName(e.target.value)} />

					<label>instructions</label>
					<input type='text' defaultValue={this.state.instructions} onChange={e => this.updateInstructions(e.target.value)} />

					{ingredient}

				</form>
				<button type='button' onClick={this.props.toggle}>cancel</button>
			</div>
		)
	}
}

export default RequiresLogin()(EditRecipieForm);