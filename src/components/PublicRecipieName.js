import React from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {rateRecipie} from '../actions/rateRecipie';
import ReactStars from 'react-stars';
import Media from 'react-media';
import {Link, withRouter} from 'react-router-dom';

import './PublicRecipieName.css';

export class PublicRecipieName extends React.Component {

	//when component mounts, dispatch the fetchRecipieDetails action
	componentWillMount() {
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	//when an onChange event occurs on .react-stars dispatch the rateRecipie action    
    ratingChanged(newRating) {
        this.props
	        .dispatch(rateRecipie(this.props.id, {
	        	id: this.props.id,
	        	rating: this.props.recipie.rating + newRating,
	        	numberOfRatings: this.props.recipie.numberOfRatings + 1
	        }));
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

		//calculate the average rating for a recipe
		let average = this.props.recipie.rating/this.props.recipie.numberOfRatings;

		//round the average rating to the nearest first decimal
		let roundedAverage = Math.max( Math.round(average * 10) / 10, 0 ).toFixed(1);

		let ingredient;

		let newArray = this.props.recipie.ingredients;

		//if ingredients is defined, map over the ingredients creating <li/> element for each 
		//ingredient and measurement		
		if (this.props.recipie.ingredients !== undefined) {
			ingredient = newArray.map((ingredients, index) => (
				<li key={index} className='public-recipie-name-ingredient-list'>
					{ingredients.measurement} {ingredients.ingredient}
				</li>
			));
		}

		return (
			<div className='public-recipie-details'>
				<Media
					query='(min-width: 768px)'
					render={() => <div className='top-nav-search-container'>
		          	  	      		  	<Link className='top-nav-search' to={'/publicrecipielist'} />
								  	  	<div className='top-nav-search-divider'>{' | '}</div>
						  		  </div>}
				/>
				<section className='name'>
		        	<h1>{this.props.recipie.name}</h1>
		        	<p>Average rating: {isNaN(average) ? 'Not yet rated' : roundedAverage}</p>
	        	</section>
	        	<section>
	        		<ul>{ingredient}</ul>
        		</section>
		        <section className='instructions'>
		        	<p>{this.props.recipie.instructions}</p>
	        	</section>
	        	<section className='rate'>
	        		<p>Rate this recipie</p>
	            	<ReactStars className='react-stars'
	                	count={5}
	                	onChange={newRating => this.ratingChanged(newRating)}
	                	size={24}
	                	color2={'#ffd700'} />
            	</section>
				<div id='bottom-nav' className='bottom-nav'>
					<Link className='search' to={'/publicrecipielist'} />				
				</div>
	        </div>
		)
	}
}

PublicRecipieName.defaultProps = {
	recipie: ''
}

const mapStateToProps = state => {
	return {
		recipie: state.recipie.recipie[0],
	};
};

export default withRouter(RequiresLogin()(connect(mapStateToProps)(PublicRecipieName)));