import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipieDetails} from '../actions/recipieDetails';
import RequiresLogin from './RequiresLogin';


export class Input2 extends React.Component {

    render() {

        //returns input component used by the redux form
        return (
            <div className='form-input'>
                <input
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    value={this.props.recipie.name}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipie: state.recipie.recipie[0]
    };
};

export default RequiresLogin()(connect(mapStateToProps)(Input2));