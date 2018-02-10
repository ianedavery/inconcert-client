import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchRecipies} from '../actions/recipies';

export class RecipieList extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchRecipies());
	}
	render() {
		return (
			<div>
				<input type='text' placeholder='search' />
				<main>
		            <div className="recipie-list">
		                {this.props.name}
		            </div>
	            </main>
            </div>
		)
	}
}

const mapStateToProps = state => {
	if(state.recipies.recipies[0]) {
		return {
			name: state.recipies.recipies[1].name
		};
	}
	else {
		return {
			name: 'nothing to see here'
		};
	}
};

export default RequiresLogin()(connect(mapStateToProps)(RecipieList));