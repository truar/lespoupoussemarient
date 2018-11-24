import React, {Component} from 'react';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <Section id="Contact" className="Contact">
                <PageTitle title="Coordonnées" />
            </Section>
        );
    }
}

export default Contact;