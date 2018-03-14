import React from 'react';
import {Field, reduxForm, FieldArray} from 'redux-form';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {editRecipie} from '../actions/editRecipie';

import './EditRecipeReduxForm.css';

export class EditRecipeReduxForm extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchRecipieDetails(this.props.location.pathname.slice(13)));
	}

	onSubmit(recipie) {
		this.props.dispatch(editRecipie(recipie));
		this.props.history.push('/recipiedetails/' + this.props.location.pathname.slice(13));
	}

	handleCancel(e) {
		e.preventDefault();
		this.props.history.push('/recipiedetails/' + this.props.location.pathname.slice(13));		
	}

	/*renderIngredient = ({fields}) => {
		return (
		    <div className='add-ingredients-container'>
		            {fields.map((ingredient, index) => (
		                    <div key={index} className='ingredients-container'>
		                    	<div>
		                    		<label>Ingredient {index + 1}</label>
		                        	<Field name={`${ingredient}.ingredient`} type='text' component='input' />
		                        </div>
		                        <div>
		                        	<label className='measurement-label'>Measurement {index + 1}</label>
		                        	<Field name={`${ingredient}.measurement`} type='text' component='input' />
		                    	</div>
		                    	<div>
		                    		<button onClick={() => fields.remove(index)}>-</button>
		                    	</div>
		                    </div>
		                )
		            )}
	        	<div>
		            <button type='button' onClick={() => fields.push()}>+</button>
		        </div>
	    	</div>
    	);
	}*/

	render() {

		const renderIngredient = ({fields}) => {
			return (
			    <div className='add-ingredients-container'>
			            {fields.map((ingredient, index) => (
			                    <div key={index} className='ingredients-container'>
			                    	<div>
			                    		<label>Ingredient {index + 1}</label>
			                        	<Field name={`${ingredient}.ingredient`} type='text' component='input' />
			                        </div>
			                        <div>
			                        	<label className='measurement-label'>Measurement {index + 1}</label>
			                        	<Field name={`${ingredient}.measurement`} type='text' component='input' />
			                    	</div>
			                    	<div>
			                    		<button onClick={() => fields.remove(index)}>-</button>
			                    	</div>
			                    </div>
			                )
			            )}
		        	<div>
			            <button type='button' onClick={() => fields.push()}>+</button>
			        </div>
		    	</div>
	    	);
		}

		return(
			<div className='edit-recipe-form'>
				<form onSubmit={this.props.handleSubmit((recipie) => this.onSubmit(recipie))}>
					<legend className='main-legend'>Edit Recipe</legend>
					<label className='name-label'>Recipe Name</label>
					<Field component='input' type='text' name='name' />

					<label className='ingredients-label'>Ingredients</label>
					<FieldArray component={renderIngredient} type='text' name='ingredients' />

					<label className='instructions-label'>Instructions</label>
					<Field component='textarea' type='text' name='instructions' />

					<div className='edit-button-container'>
						<button className='edit-button' type='submit' disabled={this.props.pristine || this.props.submitting}>edit recipe</button>
					</div>
				</form>
				<div className='cancel-edit-button-container'>
					<button className='cancel-button' type='button' onClick={e => this.handleCancel(e)}>cancel</button>
		    	</div>
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