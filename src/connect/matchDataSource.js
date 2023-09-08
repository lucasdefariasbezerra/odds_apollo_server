const { RESTDataSource } = require('apollo-datasource-rest');
const { BACKEND_URL, MATCH } = require('../utils/restConsts');
const { handleError } = require('../utils/exceptionHandler');

class MatchDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = BACKEND_URL;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getPaginatedMatches(pageNum, pageSize, seasonId) {
        const matches = await this.get(`${MATCH}?pageNum=${pageNum}&pageSize=${pageSize}&seasonId=${seasonId}`);
        return matches
    }

    async updateMatchesScore(matchesList) {
        try {
            const { message } = await this.put(`${MATCH}/update-score`, matchesList);
            return { status: 200, description: message };
        } catch(error) {
            handleError(error);
        }
    }

    async resetMatch(matchPayload) {
        try {
            const { message } = await this.put(`${MATCH}/match-reset`, matchPayload);
            return { status: 200, description: message};
        } catch(error) {
            handleError(error)
        }
    }

    async addTeam(teamPayload) {
        try {
           await this.post(`${TEAM}`, teamPayload);
           return { status: 200, description: 'new team was added' };
        } catch(error) {
            handleError(error);
        }
    }
}

module.exports = MatchDataSource;