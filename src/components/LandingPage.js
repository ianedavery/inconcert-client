import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Footer from './Footer';
import Main from './Main';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
	return (
		<div>
			<Main />
			<Footer />
		</div>
	);
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);