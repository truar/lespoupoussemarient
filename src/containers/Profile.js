import React, { Component } from 'react';
import {
    Form, FormGroup, FormFeedback, Button, Input
  } from 'reactstrap';
import Section from '../components/Section';
import WrapperContent from '../components/WrapperContent';
import './Profile.css';

class Profile extends Component {
    calculateRemainingDays() {
        var dateWedding = new Date(2019, 7, 31);
        var today = Date.now();
        var numOfDays = Math.round((dateWedding-today)/(1000*60*60*24));
        var dateDisplay = "J-" + numOfDays;
        if(numOfDays === 0) {
            dateDisplay = "JOUR-J";
        } else if(numOfDays < 0) {
            dateDisplay = "Mariage terminé";
        }
        return dateDisplay;
    }

    render() {
        const {isLogged} = this.props;
        const toRender = (isLogged) ? this.renderLogged() : this.renderAuthenticationForm();
        return (
            <Section id="Profile" className="Profile">
                {toRender}
            </Section>
        );
    }

    renderAuthenticationForm() {
        const {error, guestCode, onChange, onSubmit} = this.props;
        return (
            <WrapperContent title="Les poupous se marient !">
                <Form onSubmit={onSubmit} id="login-form">
                    <FormGroup>
                        <Input invalid={error} onChange={onChange} type="text" name="guestCode" id="guestCode" placeholder="Entrez votre code..." value={guestCode}/>
                        <FormFeedback>Code incorrect</FormFeedback>
                    </FormGroup>
                    <Button>Se connecter</Button>
                </Form>
            </WrapperContent>
        );
    }

    renderLogged() {
        const dateDisplay = this.calculateRemainingDays();
        return (
            <WrapperContent title="Que l'aventure commence !">
                <p>{dateDisplay}</p>
            </WrapperContent>
        );
    }
}

export default Profile;