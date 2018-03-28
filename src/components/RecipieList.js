import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchRecipies} from '../actions/recipies';
import {recipiesSearchTerm, clearSearchTerm} from '../actions/liveSearch';
import {Link, withRouter} from 'react-router-dom';

import './styling/RecipieList.css';

import NameList from './NameList';
import SearchForm from './SearchForm';

export class RecipieList extends React.Component {

	//when the component mounts, dispatch the fetchRecipies action
	//and the clearSearchTerm action
	componentDidMount() {
		this.props.dispatch(fetchRecipies());
		this.props.dispatch(clearSearchTerm());
	}

	//when an onChange event occurs on .search-form, dispatch the recipiesSearchTerm action
	recipiesSearchTerm(searchTerm) {
		this.props.dispatch(recipiesSearchTerm(searchTerm));
	}

	render() {
		
		let listArray = [];

		//populates listArray with the ids and names of the user's recipes
		const listArrayGenerator = array => {
			for(let i=0; i<array.length; i++) {
				listArray.push({id: array[i].id, name: array[i].name});
			}
		}

		listArrayGenerator(this.props.recipies);

		//maps over listArray, creating <li /> elements for the name of each recipe
		//and a link to the details of the recipe
		const names = listArray.map((listing, index) => (
			<li key={index} className='listed-recipie'>
				<Link to={listing.id === undefined ? '#' : '/recipiedetails/' + listing.id}>{listing.name}</Link>
			</li>
		));

		//uses the searchTerm prop to filter the listArray
		const filteredResults = listArray[0].name === undefined ? undefined : listArray.filter(item => item.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));

		//maps over filteredResults, creating <li /> elements for the name of each recipe
		//and a link to the details of the recipe
		const filteredNames = filteredResults === undefined ? undefined : filteredResults.map((listing, index) => (
			<li key={index}>
				<Link className='filtered-result' to={listing.id === undefined ? '#' : '/recipiedetails/' + listing.id}>{listing.name}</Link>
			</li>
		));

		//if the user has no recipes, return a message
		if(this.props.recipies === 'no recipes') {
			return (
				<div className='no-recipies'>
					<div className='no-recipe-message'>You currently have no recipes.</div>
					<div className='bottom-nav' id='bottom-nav' />
	            </div>
			)
		}

		return (
			<div className='your-recipies'>
		        <SearchForm className='search-form' onChange={searchTerm => this.recipiesSearchTerm({searchTerm})} />
				<NameList names={this.props.searchTerm === '' ? names : filteredNames} />
				<div className='bottom-nav' id='bottom-nav' />
            </div>
		)
	}
}

RecipieList.defaultProps = {
	searchTerm: ''
}

const mapStateToProps = state => {
	if(state.recipies.recipies[0]) {
		return {
			recipies: state.recipies.recipies,
			searchTerm: state.searchTerm.searchTerm.searchTerm
		};
	}
	else {
		return {
			recipies: 'no recipes'
		};
	}
};

export default withRouter(RequiresLogin()(connect(mapStateToProps)(RecipieList)));