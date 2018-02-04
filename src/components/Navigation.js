import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.css';

export default function Navigation(props) {
	return (
    	<nav className='navigation'>
      		<p>inConcert</p>
      		<ul>
        		<li className='nav-list-item-one'><Link to='/login'>login</Link></li>
        		<li><Link to='/register'>register</Link></li>
      		</ul>
    	</nav>
	);
}