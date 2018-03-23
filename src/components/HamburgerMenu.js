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

	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	publicRecipie(id) {
		this.props.dispatch(publicRecipie(this.props.id));
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	privateRecipie(id) {
		this.props.dispatch(privateRecipie(this.props.id));
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

    showSettings (event) {
    	event.preventDefault();
  	}

  render () {

	let logOut;

	if(this.props.loggedIn) {
		logOut = (
			<div className='logout-icon menu-item' onClick={() => this.logOut()} /> 
		);
	}

	let makePublic;
	let makePrivate;

	if(this.props.public === false) {
		makePublic = (
			<div className='public menu-item' onClick={id => this.publicRecipie(id)} />
		);
	}

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