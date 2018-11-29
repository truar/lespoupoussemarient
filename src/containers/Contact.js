import React, {Component} from 'react';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import avion from '../images/icons/avion.png';
import world from '../images/icons/world.png';
import WrapperContent from '../components/WrapperContent';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <Section id="Contact" className="Contact">
                <PageTitle title="Coordonnées" />
                <WrapperContent>
                    <article id="todoList" className="hidden-mobile">
                        <h2>To Do List</h2>
                        <ul>
                            <li className="striked">Bagues</li>
                            <li className="striked">Robe</li>
                            <li>Fleurs</li>
                            <li>D&eacute;co</li>
                            <li>Quizz</li>
                        </ul>   
                    </article>
                    <article id="images" className="hidden-mobile">
                        <p><img src={avion} /></p>
                        <p><img src={world} /></p>
                    </article>
                    <WrapperContent id="coordonnees">
                        <p><span>Anouk POITEVIN :</span></p>
                        <ul>
                            <li class="mail">anouk.poitevin@gmail.com</li>
                            <li class="phone">06.85.28.45.72</li>
                        </ul>
                        
                        <p><span>Thibault RUARO :</span></p>
                        <ul>
                            <li class="mail">thibault.ruaro@gmail.com</li>
                            <li class="phone">06.25.56.27.53</li>
                        </ul>
                        <p><span>Adresse :</span></p>
                        <ul>
                            <li class="address">10 route du Bouchet<br/>74150 Rumilly</li>
                        </ul>
                    </WrapperContent>
                </WrapperContent>
            </Section>
        );
    }
}

export default Contact;