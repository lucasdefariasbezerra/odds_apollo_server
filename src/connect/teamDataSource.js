const { RESTDataSource } = require('apollo-datasource-rest');
const { BACKEND_URL, TEAM } = require('../utils/restConsts')

class TeamDataSource extends RESTDataSource {
    constructor() {
        console.log('backend url ', BACKEND_URL);
        super();
        this.baseURL = BACKEND_URL;
    }

    async getAllTeams() {
        const teams = await this.get(TEAM);
        return teams;
    }

    async getTeamById(id) {
        const team = await this.get(`${TEAM}/${id}`);
        return team;
    }

    async getPaginatedTeam(pageNum, pageSize) {
        const page = await this.get(`${TEAM}?pageNum=${pageNum}&pageSize=${pageSize}`);
        return page;
    }
}

module.exports = TeamDataSource;