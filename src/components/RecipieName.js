import React from 'react';
import RequiresLogin from './RequiresLogin';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import {deleteRecipie} from '../actions/deleteRecipie';
import Media from 'react-media';

import BottomNav from './BottomNav';
import AltNavigation from './AltNavigation';

import './RecipieName.css';

export class RecipieName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		}
		this.toggleEdit = this.toggleEdit.bind(this)
	}

	toggleEdit() {
		this.setState({
			isEditing: !this.state.isEditing
		})
	}

	componentWillMount() {
		this.props.dispatch(fetchRecipieDetails(this.props.id));
	}

	componentDidMount () {
  		window.scrollTo(0, 0)
	}

	handleSearchButtonClick(e) {
		e.preventDefault();
		this.props.history('/recipielist');
	}

	deleteRecipie(id) {
		this.props.dispatch(deleteRecipie(this.props.id));
		this.props.history('/recipielist');
	}

	render() {

		console.log(this.props.recipie);

		window.addEventListener('scroll', bringmenu);

		function bringmenu() {
    		if (document.documentElement.scrollTop > 0) {
    			document.getElementById('bottom-nav').style.bottom = "-100%";
    		} else {
        		document.getElementById('bottom-nav').style.bottom = "0";
    		}
		}

		let ingredient;

		if (this.props.recipie.ingredients !== undefined) {
			ingredient = this.props.recipie.ingredients.map((ingredients, index) => (
				<li key={index}>
					{ingredients.measurement} {ingredients.ingredient}
				</li>
			));
		}

		return (
			<div className='recipie-details'>
				<Media
					query='(min-width: 768px)'
					render={() => <AltNavigation search={e => this.handleSearchButtonClick(e)}
												 edit={this.toggleEdit}
												 delete={id => {if(window.confirm('Are you sure you want to delete?')) {this.deleteRecipie(id)};}} 
						 	        			 id={this.props.id}
	        			   						 public={this.props.recipie.public} 
												 />}
				/>
				<section>
		        	<h1>{this.props.recipie.name}</h1>
	        	</section>
	        	<section>
	        		<ul>{ingredient}</ul>
        		</section>
		        <section>
		        	<p>{this.props.recipie.instructions}</p>
	        	</section>
	        	<BottomNav
	        			   delete={id => {if(window.confirm('Are you sure you want to delete?')) {this.deleteRecipie(id)};}}
	        			   search={e => this.handleSearchButtonClick(e)}
	        			   id={this.props.id}
	        			   public={this.props.recipie.public} 
	        			   />
	        </div>
		)
	}
}

RecipieName.defaultProps = {
	recipie: ''
}

const mapStateToProps = state => {
	return {
		recipie: state.recipie.recipie[0]
	};
};

export default RequiresLogin()(connect(mapStateToProps)(RecipieName));