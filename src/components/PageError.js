import React from 'react';

import './styles/PageError.css'

function PageError (props) {
    return (
        <div className="PageError">
            {props.error.message} &#x1F616;
        </div>
    )
}

export default PageError;