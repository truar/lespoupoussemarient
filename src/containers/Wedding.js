import React, { Component } from 'react';
import _ from 'lodash';
import Nav from './Nav';
import Profile from './Profile';
import JourJ from './JourJ';
import Hebergement from './Hebergement';
import Sjc from './Sjc';
import Contact from './Contact';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: 0, scrollDuration: 400})

const navItems = [{
    href:'#anchor-Profile',
    label:'Bienvenue',
    spanId: 'user_img'
  },{
    href:'#anchor-JourJ',
    label:'Le Jour J',
    spanId: 'jourj_img'
  },{
    href:'#anchor-Hebergement',
    label:'Hébergement',
    spanId: 'hebergement_img'
  },{
    href:'#anchor-Sjc',
    label:'Saint-Jean de chépy',
    spanId: 'SJC_img'
  },{
    href:'#anchor-Contact',
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
            selectedNavItem: navItems[0]
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = _.debounce((event) => {
        var url = window.location.href;
        var anchor = url.split('#')[1];
        var selectedNavItem = navItems.find((item) => {
            return item.href === "#" + anchor;
        });
        this.setState({
            selectedNavItem : selectedNavItem
        });
    }, 410);

    handleSubmit(event) {
        const {guestCode} = this.state;
        let isLogged = true;
        let profile = 0;
        let error = false;

        if(guestCode === this.CODE_VIN_HONNEUR) {
            profile = 1;
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

    render() {
        const {selectedNavItem, isLogged, error, profile} = this.state;

        return (
            <>
                <Profile error={error} isLogged={isLogged} onChange={this.handleChange} onSubmit={this.handleSubmit} />
                { isLogged && 
                    <>
                        <Nav navItems={navItems} selectedNavItem={selectedNavItem} />
                        <JourJ profile={profile}/>
                        <Hebergement />
                        <Sjc />
                        <Contact />
                    </>
                }
            </>
        );
    }
}

export default Wedding;