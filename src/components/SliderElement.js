import React, { Component } from 'react';
import './SliderElement.css';

class SliderElement extends Component {
    render() {
        return (
            <article className='SliderElement' id={this.props.id}>
                <div className="wrapper-content">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </article>
        )
    }
}

export default SliderElement;