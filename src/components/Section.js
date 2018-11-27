import React from 'react';

import './Section.css';

function Section(props) {
    const { id, children, ...attributes } = props;
    attributes.className = `${attributes.className} Section`;
    return (
        <section id={id} {...attributes}>
            {children}
        </section>
    );
}

export default Section;