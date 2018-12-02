import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import './Section.css';

function Section(props) {
    const { id, children, onVisibilityChange, ...attributes } = props;
    attributes.className = `${attributes.className} Section`;
    return (
        <VisibilitySensor partialVisibility={true} onChange={onVisibilityChange}>
            <section id={id} {...attributes}>
                {children}
            </section>
        </VisibilitySensor>
    );
}

export default Section;