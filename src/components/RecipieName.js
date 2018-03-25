import React from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {deleteRecipie} from '../actions/deleteRecipie';
import Media from 'react-media';
import {withRouter} from 'react-router-dom';

import BottomNav from './BottomNav';
import AltNavigation from './AltNavigation';

import './RecipieName.css';

export class RecipieName extends React.Component {

	//when component mounts, dispatch the fetchRecipieDetails action
	componentWillMount() {
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	//when component mounts, scroll to top of screen
	componentDidMount () {
  		window.scrollTo(0, 0)
	}

	//when an onClick event occures on .delete, dispatch the deleteRecipie action
	//then dispatch the fetchRecipieDetails action
	//then direct user back to recipielist.
	deleteRecipie(id) {
		return this.props
			.dispatch(deleteRecipie(this.props.id))
			.then(() => this.props.dispatch(fetchRecipieDetails(this.props.id)))
			.then(() => this.props.history.push('/recipielist'));
	}

	render() {

		//when the window scroll, call the bringmenu function
		window.addEventListener('scroll', bringmenu);

		//if the user is not at the top of the screen, hide bottom-nav
		//else, show bottom-nav
		function bringmenu() {
    		if (document.documentElement.scrollTop > 0) {
    			document.getElementById('bottom-nav').style.bottom = "-100%";
    		} else {
        		document.getElementById('bottom-nav').style.bottom = "0";
    		}
		}

		let ingredient;
		let newArray = this.props.recipie.ingredients;
		
		//if ingredients is defined, map over the ingredients creating <li/> element for each 
		//ingredient and measurement
		if (this.props.recipie.ingredients !== undefined) {
			ingredient = newArray.map((ingredients, index) => (
				<li key={index} className='recipie-name-ingredient-list'>
					{ingredients.measurement} {ingredients.ingredient}
				</li>
			));
		}

		return (
			<div className='recipie-details'>
				<Media
					query='(min-width: 768px)'
					render={() => <AltNavigation className='alt-navigation' 
												 delete={id => {if(window.confirm('Are you sure you want to delete?')) {this.deleteRecipie(id)};}} 
						 	        			 id={this.props.id}
	        			   						 public={this.props.recipie.public} 
												 />}
				/>
				<section>
		        	<h1>{this.props.recipie.name}</h1>
	        	</section>
	        	<section>
	        		<ul>{ingredient}</ul>
        		</section>
		        <section>
		        	<p>{this.props.recipie.instructions}</p>
	        	</section>
	        	<BottomNav className='bottom-nav'
	        			   delete={id => {if(window.confirm('Are you sure you want to delete?')) {this.deleteRecipie(id)};}}
	        			   id={this.props.id}
	        			   public={this.props.recipie.public} 
	        			   />
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

export default withRouter(RequiresLogin()(connect(mapStateToProps)(RecipieName)));