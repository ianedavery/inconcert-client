import React from 'react';
import RequiresLogin from './RequiresLogin';
import {Link} from 'react-router-dom';

export class Dashboard extends React.Component {

	render() {
		return (
            <div className="dashboard">
            	<button><Link to='/recipielist'>Your Recipies</Link></button>
            	<button><Link to='/publicrecipielist'>Public Recipies</Link></button>
            	<button><Link to ='/addrecipie'>Add a Recipie</Link></button>
            </div>
		)
	}
}

export default RequiresLogin()(Dashboard);