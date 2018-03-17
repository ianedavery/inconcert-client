import React from 'react';
import RequiresLogin from './RequiresLogin';
import {Link, withRouter} from 'react-router-dom';

import './Dashboard.css';

export class Dashboard extends React.Component {

	render() {
		return (
            <div className='dashboard'>
            	<div>
            		<Link to='/recipielist'>Your Recipes</Link>
        		</div>
        		<div>
            		<Link to='/publicrecipielist'>Public Recipes</Link>
        		</div>
        		<div>
            		<Link to ='/addrecipie'>Add a Recipe</Link>
        		</div>
                <div className='bottom-nav' id='bottom-nav' />
            </div>
		)
	}
}

export default withRouter(RequiresLogin()(Dashboard));