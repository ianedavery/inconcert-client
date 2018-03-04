import React from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {rateRecipie} from '../actions/rateRecipie';
import ReactStars from 'react-stars';

import './PublicRecipieName.css';

export class PublicRecipieName extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

    ratingChanged(newRating) {
        this.props.dispatch(rateRecipie(this.props.id, {
        	id: this.props.id,
        	rating: this.props.recipie.rating + newRating,
        	numberOfRatings: this.props.recipie.numberOfRatings + 1
        }));
    }

	render() {

		let average = this.props.recipie.rating/this.props.recipie.numberOfRatings;
		let roundedAverage = Math.max( Math.round(average * 10) / 10, 2.8 ).toFixed(1);

		let newArray = this.props.recipie.ingredients;

		let ingredient;

		if (newArray !== undefined) {
			ingredient = newArray.map((ingredients, index) => (
				<li key={index}>
					{ingredients.ingredient} {ingredients.measurement}
				</li>
			));
		}

		return (
			<div className='public-recipie-details'>
				<section className='name'>
		        	<h1>{this.props.recipie.name}</h1>
		        	<p>Average rating: {roundedAverage}</p>
	        	</section>
	        	<section>
	        		<ul>{ingredient}</ul>
        		</section>
		        <section className='instructions'>
		        	<p>{this.props.recipie.instructions}</p>
	        	</section>
	        	<section className='rate'>
	        		<p>Rate this recipie</p>
	            	<ReactStars
	                	count={5}
	                	onChange={newRating => this.ratingChanged(newRating)}
	                	size={24}
	                	color2={'#ffd700'} />
            	</section>
            	<div className='bottom-nav' id='bottom-nav' />
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

export default RequiresLogin()(connect(mapStateToProps)(PublicRecipieName));