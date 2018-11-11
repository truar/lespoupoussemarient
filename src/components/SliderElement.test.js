import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import SliderElement from './SliderElement';
import UnionPhoto from '../images/union-profile.png';

const id = 'id';
const body = '<h2>TOTO</h2><p>TITI</p>';

it('renders without crashing', () => {
    shallow(<SliderElement />);
});

it('renders a SliderElement with an id and a body in HTML', () => {
    const wrapper = shallow(<SliderElement id={id}>
        {body}
    </SliderElement>);
    const article = (<article className='SliderElement' id={id}>
        <div className="wrapper-content">
            <div className="content">
                {body}
            </div>
        </div>
    </article>);
    expect(wrapper).toContainReact(article);
});