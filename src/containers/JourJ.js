import React, { Component } from 'react';
import {Carousel, PageHeader, Image} from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import UnionPicture from '../images/union.jpg';
import CeremoniePicture from '../images/ceremonie.jpg';
import VinHonneurPicture from '../images/vin-honneur.jpg';
import SportPicture from '../images/sport.jpg';
import DinerPicture from '../images/diner.jpg';
import DansePicture from '../images/danse.jpg';
import BrunchPicture from '../images/brunch.jpg';
import UnionProfile from '../images/union-profile.png';
import './JourJ.css';

class JourJ extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction
        });
      }
    
      render() {
        const { index, direction } = this.state;
        return (
            <section className="JourJ" id='le-jour-j'>
                <PageHeader bsClass="wrapper-title">
                    Le Jour J
                </PageHeader>
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                >
                    <Carousel.Item>
                        <LazyLoad>
                            <img src={UnionPicture} />
                        </LazyLoad>
                        <Carousel.Caption componentClass="article">
                            <h3><Image src={UnionProfile} responsive />Anouk & Thibault</h3>
                            <p>S’unissent pour le meilleur et pour le pire le 31 Août 2019 au domaine de Saint-Jean de Chépy</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <LazyLoad>
                            <img src={CeremoniePicture} />
                        </LazyLoad>
                        <Carousel.Caption componentClass="article">
                            <h3>C&eacute;r&eacute;monie</h3>
                            <p>Nous vous donnons rendez-vous à 10h45 au domaine de Saint-Jean de Chépy. La cérémonie débutera à 11h00 sous le chapiteau</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <LazyLoad>
                            <img src={VinHonneurPicture} />
                        </LazyLoad>
                        <Carousel.Caption componentClass="article">
                            <h3>Le vin d'honneur</h3>
                            <p>Se déroulera de 13h00 à 15h00. Une activité « guest book » aura lieu dans l’après-midi. Nous aimerions que chaque invité, couple, famille apporte une photo qui lui est chère</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <LazyLoad>
                            <img src={SportPicture} />
                        </LazyLoad>
                        <Carousel.Caption componentClass="article">
                            <h3>Activit&eacute;s sportives</h3>
                            <p>De 15h00 à 18h00. N’oubliez pas de prévoir une tenue adéquate (Vestiaire et douches sur place)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <LazyLoad>
                            <img src={DinerPicture} />
                        </LazyLoad>
                        <Carousel.Caption componentClass="article">
                            <h3>Diner</h3>
                            <p>Vous pourrez vous installer dans la salle principale à partir de 19h00. Nous vous proposons de déguster un repas 100% végétarien</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <LazyLoad>
                            <img src={DansePicture} />
                        </LazyLoad>
                        <Carousel.Caption componentClass="article">
                            <h3>Soir&eacute;e</h3>
                            <p>C’est le moment d’enflammer la piste de danse ! Les festivités s’arrêteront vers 4h00 (N'oubliez pas de consulter la page h&eacute;bergements pour savoir ou dormir)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <LazyLoad>
                            <img src={BrunchPicture} />
                        </LazyLoad>
                        <Carousel.Caption componentClass="article">
                            <h3>Brunch</h3>
                            <p>Dimanche 1 Septembre à partir de 11h00. La journée sera placée sous le thème de la détente. N’oubliez pas vos maillots de bain</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        )
    }
}

export default JourJ;