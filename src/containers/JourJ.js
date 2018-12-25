import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';
import Section from '../components/Section';
import PageTitle from '../components/PageTitle';
import Element from '../components/Element';
import './JourJ.css';

const items = [
    {
        key: 1,
        className: 'Union',
        header: 'Anouk & Thibault',
        text: 'S’unissent pour le meilleur et pour le pire le 31 Août 2019 au domaine de Saint-Jean de Chépy.',
        category: 1
    }, {
        key: 2,
        className: 'Ceremonie',
        header: 'Cérémonie',
        text: 'Nous vous donnons rendez-vous à 14h au domaine de Saint-Jean de Chépy. La cérémonie débutera à 14h30 sous le chapiteau.',
        category: 1
    }, {
        key: 3,
        className: 'VinHonneur',
        header: 'Le vin d\'honneur',
        text: 'Se déroulera de 15h30 à 18h30. Nous aimerions que chaque invité, couple, famille apporte une photo (avec ou sans les mariés) pour l\'activité « guest book ».',
        category: 1
    }, {
        key: 4,
        className: 'Sport',
        header: 'Activités sportives',
        text: 'Pendant le vin d\'honneur, vous pourrez participer à des activités sportives (vestiaire et douches sur place).',
        category: 1
    }, {
        key: 5,
        className: 'Diner',
        header: 'Diner',
        text: 'Vous pourrez vous installer dans la salle principale à partir de 19h30. Nous vous proposons de déguster un repas 100% végétarien.',
        category: 2
    }, {
        key: 6,
        className: 'Soiree',
        header: 'Soirée',
        text: 'C\'est le moment d’enflammer la piste de danse ! Les festivités s’arrêteront vers 4h00 (N\'oubliez pas de consulter la page hébergements pour savoir ou dormir).',
        category: 2
    }, {
        key: 7,
        className: 'Brunch',
        header: 'Brunch',
        text: 'Dimanche 1 Septembre à partir de 11h00. La journée sera placée sous le thème de la détente. N’oubliez pas vos maillots de bain.',
        category: 3
    }
];

class JourJ extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeIndex: 0,
            firstVisit: true
        };
        this.keyboard = true;
        this.interval = false;
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.itemsForProfile = items.filter((item) => {
            return item.category <= props.profile;
        });
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.itemsForProfile.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex, firstVisit: false });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.itemsForProfile.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex, firstVisit: false});
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }

      render() {
        const { activeIndex, firstVisit } = this.state;
        
        const slides = this.itemsForProfile.map((item, i) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.key}
                    className={item.className}
                >
                    <Element {...item}/>
                </CarouselItem>
            );
        });

        return (
            <Section id="JourJ" className="JourJ" {...this.props}>
                <PageTitle title="Le Jour J" />
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    keyboard={this.keyboard}
                    interval={this.interval}
                >
                    <CarouselIndicators items={this.itemsForProfile} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
                {firstVisit && <div className="upAndDown">
                    Cliquez ici
                </div>}
            </Section>
        );
      }
}

export default JourJ;