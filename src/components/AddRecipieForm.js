import React from 'react';
import {Field, reduxForm, FieldArray} from 'redux-form';
import Input from './Input';
import Input2 from './Input2';
import RequiresLogin from './RequiresLogin';
import {required, nonEmpty} from '../validators';
import {addRecipie} from '../actions/addRecipie';

export class AddRecipieForm extends React.Component {

	onSubmit(recipie) {
		console.log(recipie);
		this.props.dispatch(addRecipie(recipie));
		this.props.history('/recipielist');
	}

	render() {

		const renderIngredient = ({fields}) => (
		    <div>
		        <div>
		            {fields.map((ingredient, index) => (
		                    <div key={index}>
		                        <Field name={`${ingredient}.ingredient`} type='text' component={Input2} label={`Ingredient ${index + 1}`} validate={[required, nonEmpty]} />
		                        <Field name={`${ingredient}.measurement`} type='text' component={Input2} label={`Measurement ${index + 1}`} validate={[required, nonEmpty]} />
		                    	<button onClick={() => fields.remove(index)}>-</button>
		                    </div>
		                )
		            )}
		        </div>
		        <div>

		            <button type='button' onClick={() => fields.push()}>+</button>
		        </div>
	    	</div>
		);

		return (
			<form onSubmit={this.props.handleSubmit(recipie => this.onSubmit(recipie))}>
				<label htmlFor='recipie-name' aria-label='recipie name'>recipie name</label>
				<Field component={Input2} type='text' name='name' validate={[required, nonEmpty]} />

				<label htmlFor='ingredients' aria-label='ingredient'>ingredients</label>
				<FieldArray component={renderIngredient} type='text' name='ingredients' />

				<label htmlFor='instructions' aria-label='instructions'>instructions</label>
				<Field component={Input2} type='text' name='instructions' validate={[required, nonEmpty]} />

				<button type='submit' disabled={this.props.pristine || this.props.submitting}>add recipie</button>
			</form>
		)
	}
}

export default RequiresLogin()(reduxForm({
	form: 'new'
})(AddRecipieForm));