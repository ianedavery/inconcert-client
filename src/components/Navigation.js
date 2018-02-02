import React from 'react';

import './Navigation.css';

export default function Navigation(props) {
	return (
    	<nav className='navigation'>
      		<p>inConcert</p>
      		<ul>
        		<li className='nav-list-item-one'>login</li>
        		<li> register</li>
      		</ul>
    	</nav>
	);
}