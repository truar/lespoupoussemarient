import React from 'react';
import {
    CarouselCaption
} from 'reactstrap';
import './Element.css';

function Element(props) {
    const {header, text} = props;
    return (
        <>
            <CarouselCaption captionText={text} captionHeader={header} />
        </>
    );
}

export default Element;