import React from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {deleteRecipie} from '../actions/deleteRecipie';

import EditRecipieForm from './EditRecipieForm';
import BottomNav from './BottomNav';

import './RecipieName.css';

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

	handleSearchButtonClick(e) {
		e.preventDefault();
		this.props.history('/recipielist');
	}

	deleteRecipie(id) {
		this.props.dispatch(deleteRecipie(this.props.id));
		this.props.history('/recipielist');
	}

	render() {

		window.addEventListener('scroll', bringmenu);

		function bringmenu() {
    		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        			document.getElementById('bottom-nav').style.bottom = "-100%";
    		} else {
        		document.getElementById('bottom-nav').style.bottom = "0";
    		}
		}

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
					{ingredients.measurement} {ingredients.ingredient}
				</li>
			));
		}

		return (
			<div className='recipie-details'>
				<section>
		        	<h1>{this.props.recipie.name}</h1>
	        	</section>
	        	<section>
	        		<ul>{ingredient}</ul>
        		</section>
		        <section>
		        	<p>{this.props.recipie.instructions}</p>
	        	</section>
	        	<BottomNav edit={this.toggleEdit}
	        			   delete={id => {if(window.confirm('Are you sure you want to delete?')) {this.deleteRecipie(id)};}}
	        			   search={e => this.handleSearchButtonClick(e)}
	        			   id={this.props.id}
	        			   public={this.props.recipie.public} />
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