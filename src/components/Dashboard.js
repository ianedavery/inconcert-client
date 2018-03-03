import React from 'react';
import RequiresLogin from './RequiresLogin';
import {Link} from 'react-router-dom';

import './Dashboard.css';

export class Dashboard extends React.Component {

	render() {
		return (
            <div className="dashboard">
            	<div className='button-container'>
            		<button><Link to='/recipielist'>Your Recipies</Link></button>
            	</div>
            	<div className='button-container'>
            		<button><Link to='/publicrecipielist'>Public Recipies</Link></button>
            	</div>
            	<div className='button-container'>
            		<button><Link to ='/addrecipie'>Add a Recipie</Link></button>
            	</div>
            </div>
		)
	}
}

export default RequiresLogin()(Dashboard);