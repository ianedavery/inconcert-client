import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchRecipies} from '../actions/recipies';

export class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchRecipies());
	}
	render() {
		return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Name: {this.props.name}
                </div>
                <div className="dashboard-protected-data">
                    
                </div>
            </div>
		)
	}
}

const mapStateToProps = state => {
	return {
		name: state.recipies.recipies[0].name
	}
};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));