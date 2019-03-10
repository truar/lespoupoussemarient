import React, { Component } from 'react';
import Nav from './Nav';
import Profile from './Profile';
import JourJ from './JourJ';
import Hebergement from './Hebergement';
import Sjc from './Sjc';
import Contact from './Contact';
import { configureAnchors } from 'react-scrollable-anchor';
import Reponse from './Reponse';

configureAnchors({offset: 1, scrollDuration: 400})

const navItems = [{
    href:'#view-Profile',
    label:'Bienvenue',
    spanId: 'user_img'
  },{
    href:'#view-JourJ',
    label:'Le Jour J',
    spanId: 'jourj_img'
  },{
    href:'#view-Hebergement',
    label:'Hébergement',
    spanId: 'hebergement_img'
  },{
    href:'#view-Reponse',
    label:'Répondre à l\'invitation',
    spanId: 'invitation_img'
  },{
    href:'#view-Sjc',
    label:'Saint-Jean de chépy',
    spanId: 'SJC_img'
  },{
    href:'#view-Contact',
    label:'Coordonnées',
    spanId: 'phone_img'
}];

class Wedding extends Component {

    constructor(props) {
        super(props);

        this.CODE_VIN_HONNEUR = process.env.REACT_APP_CODE_VIN_HONNEUR || "vin-honneur";
        this.CODE_DINER = process.env.REACT_APP_CODE_DINER || "diner";
        this.CODE_BRUNCH = process.env.REACT_APP_CODE_BRUNCH || "brunch";

        this.state = {
            guestCode: '',
            isLogged: false,
            error: undefined,
            profile: 0,
            selectedNavItem: navItems[0],
            visibilities: [true, false, false, false, false]
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    handleSubmit(event) {
        const {guestCode} = this.state;
        let isLogged = true;
        let profile = 0;
        let error = false;

        if(guestCode === this.CODE_VIN_HONNEUR) {
            profile = 1;
            if(navItems[2].href === '#view-Hebergement') {
                navItems.splice(2, 1);
            }
        } else if(guestCode === this.CODE_DINER) {
            profile = 2;
        } else if(guestCode === this.CODE_BRUNCH) {
            profile = 3;
        } else {
            isLogged = false;
            error = true;
        }

        this.setState({
            isLogged: isLogged,
            profile: profile,
            error: error
        });

        event.preventDefault();
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleVisibilityChange(isVisible, sectionIndex) {
        const visibilities = this.state.visibilities;
        visibilities[sectionIndex] = isVisible;
        let currentSectionVisible = visibilities.indexOf(true);
        this.setState({
            selectedNavItem: navItems[currentSectionVisible] || navItems[sectionIndex], 
            visibilities: visibilities
        });
    }

    render() {
        const {selectedNavItem, isLogged, error, profile} = this.state;
        let reducedIndex = (profile === 1) ? 1 : 0;
        return (
            <>
                <Profile error={error} isLogged={isLogged} onChange={this.handleChange} onSubmit={this.handleSubmit} 
                    onVisibilityChange={(isVisible) => this.handleVisibilityChange(isVisible, 0)}/>
                { isLogged && 
                    <>
                        <Nav navItems={navItems} selectedNavItem={selectedNavItem} />
                        <JourJ profile={profile} onVisibilityChange={(isVisible) => this.handleVisibilityChange(isVisible, 1)}/>
                        { profile > 1 && <Hebergement onVisibilityChange={(isVisible) => this.handleVisibilityChange(isVisible, 2)}/> }
                        <Reponse profile={profile} onVisibilityChange={(isVisible) => this.handleVisibilityChange(isVisible, 3 - reducedIndex)}/>
                        <Sjc onVisibilityChange={(isVisible) => this.handleVisibilityChange(isVisible, 4 - reducedIndex)}/>
                        <Contact onVisibilityChange={(isVisible) => this.handleVisibilityChange(isVisible, 5 - reducedIndex)}/>
                    </>
                }
            </>
        );
    }
}

export default Wedding;