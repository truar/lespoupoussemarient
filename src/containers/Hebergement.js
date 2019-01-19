import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import WrapperContent from '../components/WrapperContent';
import './Hebergement.css';
import pdf from '../files/hebergements.pdf'

const lodgingTypes = [
    {
        id: 'chalet',
        title: 'Chalets',
        infos: [[
            'Sur place',
            'Prix pour la nuit : 35€/pers'
        ], [
            'Place limitées',
            'Capacité : 7 personnes'
        ]]
    }, {
        id: 'tente',
        title: 'Tentes*',
        infos: [[
            'Sur place',
            'Prix pour la nuit : gratuit'
        ], [
            'Place limitées',
            '*matériel non fourni par les mariés'
        ]]
    }, {
        id: 'gite',
        title: 'Gites*',
        infos: [[
            'Aux alentours',
            'Prix pour la nuit : 40€/pers'
        ], [
            'A réserver',
            <a href={pdf} download>Informations hébergement</a>
        ]]
    }
]

class Hebergement extends Component {

    render() {
        const contents = lodgingTypes.map((lodgingType, i) => {
            const infos = lodgingType.infos.map((info, i) => {
                const lines = info.map((line, i) => {
                    return (
                        <p key={i}>{line}</p>
                    );
                });
                return (
                    <div key={i} className="content">
                        {lines}
                    </div>
                );
            });
            return (
                <article key={i} id={lodgingType.id}>
                    <h2>{lodgingType.title}</h2>
                    {infos}
                </article>
            )
        });

        return (
            <Section id="Hebergement" className="Hebergement" {...this.props}>
                <PageTitle title="Hébergement" />
                <WrapperContent>
                    {contents}
                </WrapperContent>
            </Section>
        );
    }
}

export default Hebergement;