import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}
	render() {
		return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-protected-data">
                    Recipies: {this.props.protectedData}
                </div>
            </div>
		)
	}
}

const mapStateToProps = state => {
	
	return {
		username: state.auth.currentUser.username,
		protectedData: state.protectedData.data
	};
};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));