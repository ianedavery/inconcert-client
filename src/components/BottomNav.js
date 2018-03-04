import React from 'react';

export default class BottomNav extends React.Component {
	render() {
		return (
			<div id='bottom-nav' className='bottom-nav'>
				<div onClick={this.props.edit} />
			</div>
		)
	}
}