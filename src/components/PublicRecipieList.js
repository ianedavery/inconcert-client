import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchPublicRecipies} from '../actions/publicRecipies';
import {recipiesSearchTerm, clearSearchTerm} from '../actions/liveSearch';
import {Link, withRouter} from 'react-router-dom';

import NameList from './NameList';
import SearchForm from './SearchForm';

import './styling/RecipieList.css';

export class PublicRecipieList extends React.Component {

	//when the component mounts, dispatch the fetchRecipies action
	//and the clearSearchTerm action	
	componentWillMount() {
		this.props.dispatch(fetchPublicRecipies());
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

		listArrayGenerator(this.props.publicRecipies);

		//maps over listArray, creating <li /> elements for the name of each recipe
		//and a link to the details of the recipe		
		const names = listArray.map((listing, index) => (
			<li key={index} className='listed-recipie'>
				<Link to={listing.id === undefined ? '#' : '/publicrecipiedetails/' + listing.id}>{listing.name}</Link>
			</li>
		));

		//uses the searchTerm prop to filter the listArray		
		const filteredResults = listArray[0].name === undefined ? console.log('cookin\'') : listArray.filter(item => item.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));

		//maps over filteredResults, creating <li /> elements for the name of each recipe
		//and a link to the details of the recipe		
		const filteredNames = filteredResults === undefined ? console.log('cookin\'') : filteredResults.map((listing, index) => (
			<li key={index}>
				<Link className='filtered-result' to={listing.id === undefined ? '#' : '/publicrecipiedetails/' + listing.id}>{listing.name}</Link>
			</li>
		));

		return (
			<div className='public-recipies'>
		        <SearchForm className='search-form' onChange={searchTerm => this.recipiesSearchTerm({searchTerm})} />
				<NameList names={this.props.searchTerm === '' ? names : filteredNames} />
            </div>
		)
	}
}

PublicRecipieList.defaultProps = {
	searchTerm: ''
}

const mapStateToProps = state => {
	return {
		publicRecipies: state.publicRecipies.publicRecipies,
		searchTerm: state.searchTerm.searchTerm.searchTerm
	};
};

export default withRouter(RequiresLogin()(connect(mapStateToProps)(PublicRecipieList)));