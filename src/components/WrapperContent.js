import React from 'react';
import './WrapperContent.css'
function WrapperContent(props) {
    const {children, title} = props;
    return (
        <div className="WrapperContent">
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