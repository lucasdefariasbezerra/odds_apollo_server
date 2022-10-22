const { RESTDataSource } = require('apollo-datasource-rest');
const { BACKEND_URL, TEAM } = require('../utils/restConsts');
const { handleError } = require('../utils/exceptionHandler');

class TeamDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = BACKEND_URL;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getAllTeams() {
        const teams = await this.get(TEAM);
        return teams;
    }

    async getTeamById(id) {
        try {
            const team = await this.get(`${TEAM}/${id}`);
            return team;
        } catch(error) {
            handleError(error);
        }
        
    }

    async updateTeam(teamPayload) {
        try {
           await this.put(`${TEAM}`, teamPayload);
           return { status: 200, description: 'update was successfull' };
        } catch(error) {
            handleError(error);
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

    async getPaginatedTeam(pageNum, pageSize) {
        const page = await this.get(`${TEAM}?pageNum=${pageNum}&pageSize=${pageSize}`);
        return page;
    }
}

module.exports = TeamDataSource;