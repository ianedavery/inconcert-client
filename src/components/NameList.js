import React from 'react';
import RequiresLogin from './RequiresLogin';

export function NameList(props) {
	return (
        <ul className="recipie-list">
            {props.names}
        </ul>
	)
}

export default RequiresLogin()(NameList);