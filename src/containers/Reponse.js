import React, {Component} from 'react';
import {
    Alert,
    UncontrolledAlert,
    FormFeedback,
    FormGroup,
    Label,
    Input,
  } from 'reactstrap';
import LoaderButton from '../components/LoaderButton';
import Section from '../components/Section';
import PageTitle from '../components/PageTitle';
import WrapperContent from '../components/WrapperContent';
import * as emailjs from 'emailjs-com';
import './Reponse.css';

const hebergementRadios = [
    {
        value: "chalet",
        label: "Chalet"
    },{
        value: "tente",
        label: "Tente"
    },{
        value: "gite",
        label: "Gîte"
    },{
        value: "autre",
        label: "Autre"
    }
];

class Reponse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPresentField: {
                value: '',
                error: false
            },
            guestListField: {
                value: '',
                error: false,
            },
            hebergementField: {
                value: 'N/A',
                error: false
            },
            success: false,
            isSubmitted: false,
            loading: false
        };

        this.SERVICE_ID = process.env.REACT_APP_SERVICE_ID || "service";
        this.TEMPLATE_POSITIVE_ID = process.env.REACT_APP_TEMPLATE_POSITIVE_ID || "template_positive";
        this.TEMPLATE_NEGATIVE_ID = process.env.REACT_APP_TEMPLATE_NEGATIVE_ID || "template_negative";
        this.USER_ID = process.env.REACT_APP_USER_ID || "user";

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleError = this.handleError.bind(this);
        this.isFormInError = this.isFormInError.bind(this);
    }

    isFormInError = () => {
        const {isPresentField, guestListField, hebergementField} = this.state;
        const {profile} = this.props;
        
        if(isPresentField.value === '') {
            isPresentField.error = true;
        } else {
            isPresentField.error = false;
            if(guestListField.value === '') {
                guestListField.error = true;
            } else {
                guestListField.error = false;
            }
            if(profile > 1 && hebergementField.value === 'N/A' && isPresentField.value === 'true') {
                hebergementField.error = true;
            } else {
                hebergementField.error = false;
            }
        }

        this.setState({
            isPresentField: isPresentField,
            guestListField: guestListField,
            hebergementField: hebergementField
        });

        return hebergementField.error || isPresentField.error || guestListField.error;
    }

    handleOptionChange = changeEvent => {
        this.setState({
            [changeEvent.target.name + "Field"]: {
                value: changeEvent.target.value
            }
        });
    }

    handleChange = event => {
        this.setState({
          [event.target.id + "Field"]: {
                value: event.target.value
          }
        });
    }

    isEmailActivated= () => {
        return this.USER_ID !== 'user';
    }

    handleSubmit = event => {
        const isFormInvalid = this.isFormInError();
        if(isFormInvalid) {
            return ;
        }
        this.setState({
            loading: true
        });
        const {profile} = this.props;
        const invitationType = (profile === 3) ? "BRUNCH" : (profile === 2) ? "DINER" : "VIN HONNEUR";
        const {isPresentField: {value: isPresent}, guestListField: {value: guestList}, hebergementField: {value: hebergement}} = this.state;
        
        let templateParam;
        let templateId;

        if(isPresent === 'true') {
            templateParam = {
                guestList: guestList,
                hebergement: hebergement,
                invitationType: invitationType
            };
            templateId = this.TEMPLATE_POSITIVE_ID;
        } else {
            templateParam = {
                guestList: guestList,
                invitationType: invitationType
            };
            templateId = this.TEMPLATE_NEGATIVE_ID;
        }
        
        if(this.isEmailActivated()) {
            emailjs.send(this.SERVICE_ID, templateId, templateParam, this.USER_ID)
                .then((response) => {
                    this.handleSuccess();
                }, (err) => {
                    this.handleError();
                });
        } else {
            setTimeout(() => {
                this.handleSuccess();
            }, 1000);
        }
    }

    handleSuccess = () => {
        this.setState({
            success: true,
            isSubmitted: true,
            loading: false
        });
    }

    handleError = () => {
        this.setState({
            success: false,
            isSubmitted: true,
            loading: false
        });
    }

    getEndForm = () => {
        const {success, isSubmitted, loading} = this.state;
        const button = (<LoaderButton
          type="submit"
          text="Envoyer"
          isLoading={loading}
          loadingText="Envoi en cours..."
          onClick={this.handleSubmit}
        />);
        let endForm = '';
        if(success === true && isSubmitted === true) {
            endForm = (<Alert color="success">
                Votre réponse a bien été envoyée. Merci !
            </Alert>);
        } else if(success === false && isSubmitted === true) {
            endForm = (<><UncontrolledAlert color="danger">
                Une erreur s'est produite.
            </UncontrolledAlert>
            {button}
            </>);
        } else {
            endForm = button;
        }
        return endForm;
    }

    getSecondPart = () => {
        const {isPresentField: {value: isPresent}, 
            guestListField: {value: guestList, error: guestListError}, 
            hebergementField: {value: hebergement, error: hebergementError}, 
            success} = this.state;
        let secondPart = '';
        const hebergementDisplay = hebergementRadios.map((radio) => {
            return (
                <FormGroup key={radio.value} >
                    <Input id={radio.value + "Id"} disabled={success} 
                        type="radio" name="hebergement" value={radio.value}
                            onChange={this.handleOptionChange}
                            checked={hebergement === radio.value} />   
                    <Label htmlFor={radio.value + "Id"}>{radio.label}</Label>
                </FormGroup>
            );
        });
        if(isPresent === 'true') {
            secondPart = (<>
                <WrapperContent>
                    <p className="spaceDown">Veuillez renseigner la liste des personnes qui seront présentes ainsi que toutes informations dont vous souhaiteriez nous faire part.</p>
                    <Input invalid={guestListError} disabled={success} type="textarea" name="guestList" id="guestList" placeholder="Prénom nom" 
                        value={guestList} onChange={this.handleChange}/>
                </WrapperContent>
                {this.props.profile > 1 &&
                    <WrapperContent>
                        <p className="spaceDown">Merci de nous indiquer le type de logement que vous souhaiteriez avoir pour la nuit.</p>
                        <WrapperContent id="hebergementGroup">
                            <WrapperContent>
                                {hebergementDisplay}
                            </WrapperContent>
                            {hebergementError && <FormFeedback style={{display: 'block'}}>Veuillez sélectionner un hébergement</FormFeedback>}
                        </WrapperContent>
                    </WrapperContent>
                }
            </>);
        } else if(isPresent === 'false') {
            secondPart = (
                <WrapperContent>
                    <p className="spaceDown">Merci de renseigner votre nom et prénom.</p>
                    <Input invalid={guestListError} disabled={success} type="text" name="guestList" id="guestList" placeholder="Nom prénom" 
                        value={guestList} onChange={this.handleChange}/>
                </WrapperContent>
            );
        }
        return secondPart;
    }

    render() {
        const {isPresentField: {value: isPresent, error: isPresentError}, success} = this.state;
        let endForm = this.getEndForm();
        let secondPart = this.getSecondPart();

        return (
            <Section id="Reponse" className="Reponse" {...this.props}>
                <PageTitle title="Répondre à l'invitation" />
                <WrapperContent>
                    <WrapperContent>
                        <p>Serez-vous diponible le Jour-J ?</p>
                        <WrapperContent>
                            <FormGroup>
                                <Input id="yesInput" disabled={success} type="radio" name="isPresent" value={true}
                                onChange={this.handleOptionChange}
                                checked={isPresent === 'true'} />
                                <Label htmlFor="yesInput">Oui</Label>
                            </FormGroup>
                            <FormGroup>
                                <Input id="noInput" disabled={success} type="radio" name="isPresent" value={false}
                                    onChange={this.handleOptionChange}
                                    checked={isPresent === 'false'} />
                                <Label htmlFor="noInput">Non</Label>
                            </FormGroup>
                        </WrapperContent>
                        {isPresentError && <FormFeedback style={{display: 'block'}}>Veuillez sélectionner une réponse</FormFeedback>}
                    </WrapperContent>
                    {secondPart}
                <WrapperContent>
                    {endForm}
                </WrapperContent>
                </WrapperContent>
            </Section>
        );
    }
}

export default Reponse;