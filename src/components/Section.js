import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Section.css';

function Section(props) {
    const { id, children, onVisibilityChange, ...attributes } = props;
    attributes.className = `${attributes.className} Section`;
    delete(attributes.profile);
    delete(attributes.error);
    return (
        <ScrollableAnchor id={`view-${id}`}>
            <VisibilitySensor partialVisibility={true} onChange={onVisibilityChange}>
                <section id={id} {...attributes}>
                    <div className="transparent-background"></div>
                    {children}
                </section>
            </VisibilitySensor>
        </ScrollableAnchor>
    );
}

export default Section;