import React, { Component } from 'react';
import UnionPhoto from '../../images/union-profile.png';
import SliderElement from '../../components/SliderElement';
import {Carousel} from 'react-bootstrap';
import './Union.css';
import UnionPicture from '../../images/union.jpg'

function Union(props) {
    return (
        <Carousel.Item>               
            <img src={UnionPicture} />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default Union;