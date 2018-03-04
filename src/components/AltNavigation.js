import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import HamburgerMenu from './HamburgerMenu';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
import './Navigation.css';

export class AltNavigation extends React.Component {

	render() {

		return (
	    	<nav className='navigation' id='alt-navigation'>
	      		<p><Link to='/'>RecipieBox</Link></p>
        		 <HamburgerMenu search={this.props.search}
        		 				edit={this.props.edit}
        		 				delete={this.props.delete}
        		 				id={this.props.id}
        		 				public={this.props.public} 
        		 				/>
	    	</nav>
		);
	}
}


export default withRouter(connect()(AltNavigation));