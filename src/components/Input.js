import React from 'react';
import './Input.css';

function Input(props) {
    alert({props.invalid});
    return (
        <input className='Input' {...props} />
    );
}

export default Input;