import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchRecipies} from '../actions/recipies';
import {recipiesSearchTerm} from '../actions/liveSearch';
import {Link} from 'react-router-dom';

import './RecipieList.css';

import NameList from './NameList';
import SearchForm from './SearchForm';

export class RecipieList extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchRecipies());
		this.props.dispatch(recipiesSearchTerm(''));
	}

	recipiesSearchTerm(searchTerm) {
		this.props.dispatch(recipiesSearchTerm(searchTerm));
	}

	render() {

		let newArray = [];

		function fuzz(array) {
			for(let i=0; i<array.length; i++) {
				newArray.push({id: array[i].id, name: array[i].name});
			}
		}

		fuzz(this.props.recipies);

		const names = newArray.map((listing, index) => (
			<li key={index} className='listed-recipie'>
				<Link to={listing.id === undefined ? '#' : '/recipiedetails/' + listing.id}>{listing.name}</Link>
			</li>
		));

		const filteredResults = newArray[0].name === undefined ? console.log('cookin\'') : newArray.filter(item => item.name.includes(this.props.searchTerm));

		const filteredNames = filteredResults === undefined ? console.log('cookin\'') : filteredResults.map((listing, index) => (
			<li key={index}>
				<Link to={listing.id === undefined ? '#' : '/recipiedetails/' + listing.id}>{listing.name}</Link>
			</li>
		));

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
			recipies: 'To add your first recipie, click "Add Recipie"'
		};
	}
};

export default RequiresLogin()(connect(mapStateToProps)(RecipieList));