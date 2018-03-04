import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import './LandingPage.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
	return (
		<div>
		    <main role-='main' className='main'>
		      	<header role='banner' className='header'>
		        	<h1>All your recipies.<br /> One app.</h1>
		      	</header>
				<section className='first-section'>
					<h2>Never misplace another recipie</h2>
					<p>All of your recipies available to you in one place all the time.</p>
				</section>
				<section className='second-section'>
					<h2>Share you recipies to the public.</h2>
					<p>Make your recipies public so others can taste the deliciouness and rate it.</p>
				</section>
				<section className='footer'>
		      		<address>
		       			 Created by: Ian Avery
		      		</address>
	      		</section>
		    	<div className='bottom-nav' id='bottom-nav' />
	    	</main>
		</div>
	);
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LandingPage));