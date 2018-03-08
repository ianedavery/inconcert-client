import React from 'react';
import {connect} from 'react-redux';

export class PublicRecipeBottomNav extends React.Component {

	render() {

		return (
			<div id='bottom-nav' className='bottom-nav'>
				<div className='search' onClick={this.props.search} />				
			</div>
		)
	}
}

export default connect()(PublicRecipeBottomNav);