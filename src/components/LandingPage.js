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
		        	<h1>RecipieBox</h1>
		        	<h2>All your recipies. In one place.</h2>
		      	</header>
				<section className='first-section'>
					<h3>Never misplace another recipie</h3>
					<p>All of your recipies available to you in one place all the time.</p>
				</section>
				<section className='second-section'>
					<h3>Share you recipies to the public.</h3>
					<p>Make your recipies public so others can taste the deliciouness and rate it.</p>
				</section>
	    	</main>	
		    <footer role='contentinfo' className='footer'>
	      		<address>
	       			 Created by: Ian Avery
	      		</address>
	    	</footer>
		</div>
	);
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LandingPage));