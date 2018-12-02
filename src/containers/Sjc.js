import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import WrapperContent from '../components/WrapperContent';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import './Sjc.css';

class Sjc extends Component {
    render() {
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 45.304472, lng: 5.510262 }}
            >
                {props.isMarkerShown && <Marker position={{ lat: 45.304472, lng: 5.510262 }} />}
            </GoogleMap>
        ));
        const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || 'mySecretKey';
        const googleMapUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
        return (
            <Section id="Sjc" className="Sjc" {...this.props}>
                <PageTitle title="Saint-Jean de Chépy" />
                <WrapperContent>
                    <WrapperContent>
                        <WrapperContent>
                            <h3>Adresse :</h3>
                            <ul className="adress">
                                <li>Domaine St-Jean de Chépy</li>
                                <li>11 Chemin du Domaine</li>
                                <li>38210 Tullins</li>
                            </ul>
                        </WrapperContent>
                        <WrapperContent>
                            <h3>A proximit&eacute; :</h3>
                            <ul>
                                <li>Gare TGV <span className="oi oi-arrow-thick-right"></span> Grenoble</li>
                                <li>Aéroport <span className="oi oi-arrow-thick-right"></span> Lyon-Saint-Ex</li>
                                <li>Autoroutes <span className="oi oi-arrow-thick-right"></span> A48 et A49</li>
                            </ul>
                        </WrapperContent>
                    </WrapperContent>
                    <WrapperContent>
                        <MyMapComponent
                            isMarkerShown
                            googleMapURL={googleMapUrl}
                            loadingElement={<div style={{ height: '100%' }} />}
                            containerElement={<div style={{ width: '100%', height: '100%' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                            />
                    </WrapperContent>
                </WrapperContent>
            </Section>
        );
    }
}

export default Sjc;