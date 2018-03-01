import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchPublicRecipies} from '../actions/publicRecipies';
import {recipiesSearchTerm} from '../actions/liveSearch';
import {Link} from 'react-router-dom';
import './RecipieList.css';

import NameList from './NameList';
import SearchForm from './SearchForm';

export class PublicRecipieList extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchPublicRecipies());
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

		fuzz(this.props.publicRecipies);

		const names = newArray.map((listing, index) => (
			<li key={index}>
				<Link to={listing.id === undefined ? '#' : '/publicrecipiedetails/' + listing.id}>{listing.name}</Link>
			</li>
		));

		const filteredResults = () => newArray.filter(recipie => recipie.name === this.props.searchTerm);

		const filteredNames = filteredResults().map((listing, index) => (
			<li key={index}>
				<Link to={listing.id === undefined ? '#' : '/publicrecipiedetails/' + listing.id}>{listing.name}</Link>
			</li>
		));

		return (
			<div>
		        <SearchForm onChange={searchTerm => this.recipiesSearchTerm({searchTerm})} />
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

export default RequiresLogin()(connect(mapStateToProps)(PublicRecipieList));