const { RESTDataSource } = require('apollo-datasource-rest');
const { BACKEND_URL, COUNTRY, MATCH } = require('../utils/restConsts');
const { handleError } = require('../utils/exceptionHandler');

class MatchDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = BACKEND_URL;
    }

    async getPaginatedMatches(pageNum, pageSize) {
        const matches = await this.get(`${MATCH}?pageNum=${pageNum}&pageSize=${pageSize}`);
        return matches
    }
}

module.exports = MatchDataSource;