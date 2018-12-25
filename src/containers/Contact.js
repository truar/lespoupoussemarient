import React, {Component} from 'react';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import WrapperContent from '../components/WrapperContent';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <Section id="Contact" className="Contact" {...this.props}>
                <PageTitle title="Coordonnées" />
                <WrapperContent id="coordonnees">
                    <p><span>Anouk POITEVIN :</span></p>
                    <ul>
                        <li className="mail">anouk.poitevin@gmail.com</li>
                        <li className="phone">06.85.28.45.72</li>
                    </ul>
                    
                    <p><span>Thibault RUARO :</span></p>
                    <ul>
                        <li className="mail">thibault.ruaro@gmail.com</li>
                        <li className="phone">06.25.56.27.53</li>
                    </ul>
                    <p><span>Adresse :</span></p>
                    <ul>
                        <li className="address">164 rue des Pyrénées<br/>75020 Paris</li>
                    </ul>
                </WrapperContent>
            </Section>
        );
    }
}

export default Contact;