import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {publicRecipie} from '../actions/makeRecipiePublic';
import {privateRecipie} from '../actions/makeRecipiePrivate';

export class BottomNav extends React.Component {

	publicRecipie(id) {
		this.props.dispatch(publicRecipie(this.props.id));
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	privateRecipie(id) {
		this.props.dispatch(privateRecipie(this.props.id));
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	render() {

		console.log(this.props.id);
		console.log(this.props.public);

		let makePublic;
		let makePrivate;

		if(this.props.public === false) {
			makePublic = (
				<div className='public' onClick={id => this.publicRecipie(id)} />
			);
		}

		if(this.props.public === true) {
			makePrivate = (
				<div className='private' onClick={id => this.privateRecipie(id)} />
			);
		}

		return (
			<div id='bottom-nav' className='bottom-nav'>
				<div className='edit' onClick={this.props.edit} />
				<div className='delete' onClick={this.props.delete} />
				<div className='search' onClick={this.props.search} />
	        	{makePublic}
	        	{makePrivate}				
			</div>
		)
	}
}

export default connect()(BottomNav);