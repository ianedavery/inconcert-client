import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {publicRecipie} from '../actions/makeRecipiePublic';
import {privateRecipie} from '../actions/makeRecipiePrivate';

export class BottomNav extends React.Component {

	//when on onClick event occurs on .public, dispath the publicRecipie action,
	//then the fetchRecipieDetails action	
	publicRecipie(id) {
		this.props.dispatch(publicRecipie(this.props.id));
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	//when on onClick event occurs on .private, dispath the privateRecipie action,
	//then the fetchRecipieDetails action	
	privateRecipie(id) {
		this.props.dispatch(privateRecipie(this.props.id));
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	render() {

		let makePublic;
		let makePrivate;

		//if the recipe is not public assign value to makePublic		
		if(this.props.public === false) {
			makePublic = (
				<div className='public' onClick={id => this.publicRecipie(id)} />
			);
		}

		//if the recipe is public assign value to makePrivate		
		if(this.props.public === true) {
			makePrivate = (
				<div className='private' onClick={id => this.privateRecipie(id)} />
			);
		}

		return (
			<div id='bottom-nav' className='bottom-nav'>
				<Link className='edit' to={'/editrecipie/' + this.props.id} />
				<div className='delete' onClick={this.props.delete} />
	      		<Link className='search' to={'/recipielist'} />
	        	{makePublic}
	        	{makePrivate}				
			</div>
		)
	}
}

export default connect()(BottomNav);