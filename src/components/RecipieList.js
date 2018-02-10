import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchRecipies} from '../actions/recipies';
import {recipiesSearchTerm} from '../actions/liveSearch';
import './RecipieList.css';

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

		return (
			<div>

		        <SearchForm onChange={searchTerm => this.recipiesSearchTerm({searchTerm})} />

				<main>
		            <ul className="recipie-list">
		                {names}
		            </ul>
	            </main>
            </div>
		)
	}
}

const mapStateToProps = state => {
	if(state.recipies.recipies[0]) {
		return {
			recipies: state.recipies.recipies,
			searchTerm: state.searchTerm.searchTerm
		};
	}
	else {
		return {
			recipies: 'To add your first recipie, click "Add Recipie"'
		};
	}
};

export default RequiresLogin()(connect(mapStateToProps)(RecipieList));