import React from 'react';
import RequiresLogin from './RequiresLogin';
import {withRouter} from 'react-router-dom';

export function NameList(props) {
	return (
        <ul className="recipie-list">
            {props.names}
        </ul>
	)
}

export default withRouter(RequiresLogin()(NameList));