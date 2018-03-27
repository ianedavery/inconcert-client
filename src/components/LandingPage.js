import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './styling/LandingPage.css';

export class LandingPage extends React.Component {

 	//ensures the component is always scrolled to the top when mounted
	componentDidMount () {
  		window.scrollTo(0, 0)
	}

	render() {

		//if the user is logged in, redirect them directly to their dashboard
	    if (this.props.loggedIn) {
	        return <Redirect className='dashboard-redirect' to='/dashboard' />;
	    }

		return (
			<div className='landing-page'>
			    <main role-='main' className='main'>
			      	<header role='banner' className='header'>
			        	<h1>All your recipes.<br />One app.</h1>
			      	</header>
					<section className='first-section'>
						<div className='first-sub-container'>
							<div className='first-sub'>
								<h2>Never lose another recipe.</h2>
								<p>Add your recipes so they are always available to you in one place.</p>
							</div>
						</div>
						<div className='second-sub'>
							<img src={require('./images/recipescreenshot.png')} alt='recipe screenshot' />
						</div>					
					</section>
					<section className='second-section'>
						<h2>Share you recipe to the public.</h2>
						<p>Make your recipe public so others can taste the deliciouness.</p>
						<img src={require('./images/share.png')} alt='share icon' />
					</section>
					<section className='third-section'>
						<h2>Rate public recipes.</h2>
						<p>And let others rate your public recipes.</p>
						<img src={require('./images/fivestars.png')} alt='five stars' />
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
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);