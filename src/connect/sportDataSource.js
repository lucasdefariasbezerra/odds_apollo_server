const { RESTDataSource } = require('apollo-datasource-rest');
const { BACKEND_URL, SPORT } = require('../utils/restConsts');
const { handleError } = require('../utils/exceptionHandler');

class SportDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = BACKEND_URL;
    }

    async getAllSports() {
        const sports = await this.get(SPORT);
        return sports;
    }
}

module.exports = SportDataSource