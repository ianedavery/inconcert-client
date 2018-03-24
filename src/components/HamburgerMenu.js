import React from 'react';
import {connect} from 'react-redux';
import {slide as Menu} from 'react-burger-menu';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {publicRecipie} from '../actions/makeRecipiePublic';
import {privateRecipie} from '../actions/makeRecipiePrivate';

import './HamburgerMenu.css';

export class HamburgerMenu extends React.Component {

	//when an onClick event occurs on .logout-icon, dispatch clearAuth and call clearAuthToken
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	//when on onClick event occurs on .public, dispath the publicRecipie action,
	//then the fetchRecipieDetails action
	publicRecipie(id) {
		return this.props
			.dispatch(publicRecipie(this.props.id))
			.then(() => this.props.dispatch(fetchRecipieDetails(this.props.id)));
	}

	//when on onClick event occurs on .private, dispath the privateRecipie action,
	//then the fetchRecipieDetails action
	privateRecipie(id) {
		return this.props
			.dispatch(privateRecipie(this.props.id))
			.then(() => this.props.dispatch(fetchRecipieDetails(this.props.id)));
	}

  render () {

	let logOut;
	let makePublic;
	let makePrivate;

	//if the user is logged in assign value to logOut
	if(this.props.loggedIn) {
		logOut = (
			<div className='logout-icon menu-item' onClick={() => this.logOut()} /> 
		);
	}

	//if the recipe is not public assign value to makePublic
	if(this.props.public === false) {
		makePublic = (
			<div className='public menu-item' onClick={id => this.publicRecipie(id)} />
		);
	}
	
	//if the recipe is public assign value to makePrivate
	if(this.props.public === true) {
		makePrivate = (
			<div className='private menu-item' onClick={id => this.privateRecipie(id)} />
		);
	}  	

    return (

      <Menu right>
      		<Link className='search menu-item' to={'/recipielist'} />
			<Link className='edit menu-item' to={'/editrecipie/' + this.props.id} />
			<div className='delete menu-item' onClick={this.props.delete} />
        	{makePublic}
        	{makePrivate}
        	{logOut}
      </Menu>

    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HamburgerMenu);