import React from 'react';
import './WrapperContent.css';

function WrapperContent(props) {
    const {children, id, title} = props;

    return (
        <div id={id} className="WrapperContent">
            {title &&
                <h2>
                    {title}
                </h2>
            }
            {children}
        </div>
    )
}

export default WrapperContent;