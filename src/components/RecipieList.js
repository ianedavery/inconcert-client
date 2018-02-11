import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchRecipies} from '../actions/recipies';
import {recipiesSearchTerm} from '../actions/liveSearch';
import './RecipieList.css';

import NameList from './NameList';
import SearchForm from './SearchForm';

export class RecipieList extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchRecipies());
	}

	recipiesSearchTerm(searchTerm) {
		this.props.dispatch(recipiesSearchTerm(searchTerm));
	}

	render() {

		let recipies = this.props.recipies;

		let nameArray = [];

		function recipieList(arr) {
			for(let i=0; i<arr.length; i++) {
				nameArray.push(recipies[i].name);
			}
		}

		recipieList(this.props.recipies);

		const names = nameArray.map((name, index) => (
			<li key={index}>
				{name}
			</li>
		));

		const filteredResults = () => nameArray.filter(name => name === this.props.searchTerm);

		const filteredNames = filteredResults(nameArray).map((name, index) => (
			<li key={index}>
				{name}
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