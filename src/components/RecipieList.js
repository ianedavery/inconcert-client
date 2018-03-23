import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchRecipies} from '../actions/recipies';
import {recipiesSearchTerm} from '../actions/liveSearch';
import {Link, withRouter} from 'react-router-dom';

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

		const fuzz = (array) => {
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

		const filteredResults = newArray[0].name === undefined ? undefined : newArray.filter(item => item.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));

		const filteredNames = filteredResults === undefined ? undefined : filteredResults.map((listing, index) => (
			<li key={index}>
				<Link className='filtered-result' to={listing.id === undefined ? '#' : '/recipiedetails/' + listing.id}>{listing.name}</Link>
			</li>
		));

		if(this.props.recipies === 'no recipes') {
			return (
				<div className='your-recipies'>
			        <SearchForm className='search-form' onChange={searchTerm => this.recipiesSearchTerm({searchTerm})} />
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