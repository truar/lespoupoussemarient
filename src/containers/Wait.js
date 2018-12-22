import React, { Component } from 'react';
import {
    Form, FormGroup, FormFeedback, Button, Input
  } from 'reactstrap';
import Section from '../components/Section';
import WrapperContent from '../components/WrapperContent';
import './Profile.css';

class Wait extends Component {

    render() {
        return (
            <Section id="Profile" className="Profile">
                <WrapperContent title="Les poupous se marient !">
                   <p>Le site sera disponible à partir du 31 Janvier 2019.</p>
                </WrapperContent>
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

export default Wait;