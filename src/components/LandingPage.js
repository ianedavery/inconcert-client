import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

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
					<h3>Search for live shows in your area</h3>
					<p>Map out upcoming live music events based on your location.</p>
				</section>
				<section className='second-section'>
					<h3>Add events to your calendar.</h3>
					<p>When you find an event you want to attend, add it to your calendar so you don't miss it.</p>
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