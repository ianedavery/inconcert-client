import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
				<Link className='edit' to={'/editrecipie/' + this.props.id} />
				<div className='delete' onClick={this.props.delete} />
				{/*<div className='search' onClick={this.props.search} />*/}
	      		<Link className='search' to={'/recipielist'} />
	        	{makePublic}
	        	{makePrivate}				
			</div>
		)
	}
}

export default connect()(BottomNav);