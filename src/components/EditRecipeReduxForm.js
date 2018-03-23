import React from 'react';
import {Field, reduxForm, FieldArray} from 'redux-form';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {editRecipie} from '../actions/editRecipie';
import {withRouter} from 'react-router-dom';

import './EditRecipeReduxForm.css';

export class EditRecipeReduxForm extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	onSubmit(recipie) {
		this.props.dispatch(editRecipie(recipie));
		this.props.history('/recipiedetails/' + this.props.id);
	}

	handleCancel(e) {
		e.preventDefault();
		this.props.history('/recipiedetails/' + this.props.id);		
	}

	renderIngredients = ({fields}) => {
		return (
		    <div className='add-ingredients-container'>
		            {fields.map((ingredient, index) => (
		                    <div key={index} className='field-container'>
		                    		<div className='ingredient-field'>
		                    			<label className='ingredient-label'>Ingredient {index + 1}</label>
		                        		<Field name={`${ingredient}.ingredient`} type='text' component='input' />
		                        	</div>
		                        	<div className='measurement-field'>
		                        		<label className='measurement-label'>Measurement {index + 1}</label>
		                        		<Field name={`${ingredient}.measurement`} type='text' component='input' />
		                    		</div>
		                    	<div className='remove-edit-ingredients-button-container'>
		                    		<button className='remove-ingredients-button' type='button' onClick={() => fields.remove(index)}>-</button>
		                    	</div>
		                    </div>
		                )
		            )}
	        	<div className='add-ingredients-button-container'>
		            <button className='add-ingredients-button' type='button' onClick={() => fields.push()}>+</button>
		        </div>
	    	</div>
    	);
	}

	render() {

		return(
			<div className='edit-recipe-form'>
				<form onSubmit={this.props.handleSubmit((recipie) => this.onSubmit(recipie))}>
					<legend className='main-legend'>Edit Recipe</legend>
					<label className='name-label main-label'>Recipe Name</label>
					<Field component='input' type='text' name='name' />
 					
 					<div className='edit-recipe-ingredient-container'>
						<label className='ingredients-label main-label'>Ingredients</label>
						<FieldArray component={this.renderIngredients.bind(this)} type='text' name='ingredients' />
					</div>
					
					<label className='instructions-label main-label'>Instructions</label>
					<Field className='textarea' component='textarea' type='text' name='instructions' />

					<div className='edit-button-container'>
						<button className='edit-button' type='submit' disabled={this.props.pristine || this.props.submitting}>edit recipe</button>
						<button className='cancel-button' type='button' onClick={e => this.handleCancel(e)}>cancel</button>
					</div>
				</form>

				<div className='bottom-nav' id='bottom-nav' />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		initialValues: state.recipie.recipie[0]
	};
};

const myForm = reduxForm({
	form: 'myForm'
})(EditRecipeReduxForm);

export default RequiresLogin()(connect(mapStateToProps)(myForm));