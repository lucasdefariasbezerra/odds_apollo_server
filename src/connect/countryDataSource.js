const { RESTDataSource } = require('apollo-datasource-rest');
const { BACKEND_URL, COUNTRY } = require('../utils/restConsts');
const { handleError } = require('../utils/exceptionHandler');

class CountryDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = BACKEND_URL;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getAllCountries() {
        const countries = await this.get(COUNTRY);
        return countries;
    }

    async getPaginatedCountries(pageNum, pageSize) {
        const  countriesPage = await this.get(`${COUNTRY}?pageNum=${pageNum}&pageSize=${pageSize}`);
        return countriesPage;
    }

    async getCountryById(id) {
        try {
            const country = await this.get(`${COUNTRY}/${id}`);
            return country;
        } catch(error) {
            handleError(error);
        }
    }
}

module.exports = CountryDataSource;