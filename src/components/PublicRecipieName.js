import React from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {rateRecipie} from '../actions/rateRecipie';
import ReactStars from 'react-stars';

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
        this.props.dispatch(fetchRecipieDetails(this.props.id));
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
			<div>
				<section>
		        	<h2>{this.props.recipie.name}</h2>
		        	<p>Average rating: {roundedAverage}</p>
	        	</section>
	        	<section>
	        		<h3>Ingredients</h3>
	        		<ul>{ingredient}</ul>
        		</section>
		        <section>
		        	<h3>Instructions</h3>
		        	<p>{this.props.recipie.instructions}</p>
	        	</section>
	        	Rate this recipie
	            <ReactStars
                	count={5}
                	onChange={newRating => this.ratingChanged(newRating)}
                	size={24}
                	color2={'#ffd700'} />
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