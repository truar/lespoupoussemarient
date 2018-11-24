import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import './Section.css';

function Section(props) {
    const { id, children, ...attributes } = props;
    attributes.className = `${attributes.className} Section`;
    return (
        <ScrollableAnchor id={`anchor-${id}`}>
            <section id={id} {...attributes}>
                {children}
            </section>
        </ScrollableAnchor>
    );
}

export default Section;