import React from 'react';
import RequiresLogin from './RequiresLogin';
import {editRecipie} from '../actions/editRecipie';
import {Field, reduxForm} from 'redux-form';
import Input2 from './Input2';

export class EditRecipieForm2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			instructions: this.props.instructions,
			ingredients: this.props.ingredients,
			id: this.props.id
		}
	}

	/*handleSubmit(id, state) {
		this.props.dispatch(editRecipie(id, state));
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

	updateMeasurement(_id, measurement) {
	    this.setState({
	    	ingredients: this.state.ingredients.map(
	    		el => el._id === _id ? Object.assign({}, el, {measurement: measurement}) : el)
		})
	}*/

	render() {
		return(
		<form>

		<label htmlFor='recipie-name'>recipie name</label>
		<Field component={Input2} type='text' name='name' value={this.state.name} />

		<label htmlFor='instructions'>instructions</label>
		<Field component={Input2} type='text' name='instructions' value={this.state.instructions} />

		</form>
		)
		/*const ingredient = this.props.ingredients.map((ingredients, index) => (
			<div key={index}>
				<label>ingredient</label>
				<input type='text' defaultValue={ingredients.ingredient} onChange={e => this.updateIngredient(ingredients._id, e.target.value)} />

				<label>measurement</label>
				<input type='text' defaultValue={ingredients.measurement} onChange={e => this.updateMeasurement(ingredients._id, e.target.value)} />
			</div>
		))
		return(
			<div>
				<form>
					<legend>edit recipie</legend>
					<label>recipie name</label>
					<input type='text' defaultValue={this.state.name} onChange={e => this.updateName(e.target.value)} />

					<label>instructions</label>
					<input type='text' defaultValue={this.state.instructions} onChange={e => this.updateInstructions(e.target.value)} />

					{ingredient}
				</form>
				<button type='button' onClick={this.props.toggle}>cancel</button>
			</div>
		)*/
	}
}

export default RequiresLogin()(reduxForm({
	form: 'edit'
})(EditRecipieForm2));