import React from 'react';
import {
    CarouselCaption
} from 'reactstrap';
import './Element.css';

function Element(props) {
    const {picture, header, text} = props;
    return (
        <>
            <img alt="customImage" src={picture} />
            <CarouselCaption captionText={text} captionHeader={header} />
        </>
    );
}

export default Element;