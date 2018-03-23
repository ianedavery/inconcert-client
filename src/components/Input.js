import React from 'react';

export default class Input extends React.Component {

    render() {
        //creates error variable if input field is touched but no text entered
        let error;
        if (this.props.meta.touched) {
            error = <div className='form-error'>{this.props.meta.error}</div>;
        }

        //returns input component used by the redux form
        return (
            <div className='form-input'>
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                </label>
                <input
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                />
            </div>
        );
    }
}