class EnvVariables {
    constructor() {
        this.CODE_VIN_HONNEUR = process.env.REACT_APP_CODE_VIN_HONNEUR || "vin-honneur";
        this.CODE_DINER = process.env.REACT_APP_CODE_DINER || "diner";
        this.CODE_BRUNCH = process.env.REACT_APP_CODE_BRUNCH || "brunch";
        this.GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || 'mySecretKey';
    }

    getGoogleApiKey() {
        return this.GOOGLE_API_KEY;
    }
}

export default EnvVariables;