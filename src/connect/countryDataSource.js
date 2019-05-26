const { RESTDataSource } = require('apollo-datasource-rest');
const { BACKEND_URL, COUNTRY } = require('../utils/restConsts')

class CountryDataSource extends RESTDataSource {
    constructor() {
        console.log('backend url ', BACKEND_URL);
        super();
        this.baseURL = BACKEND_URL;
    }

    async getAllCountries() {
        const countries = await this.get(COUNTRY);
        return countries;
    }

    async getCountryById(id) {
        const country = await this.get(`${COUNTRY}/${id}`);
        return country;
    }
}

module.exports = CountryDataSource;