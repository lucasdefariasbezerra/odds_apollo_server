const { RESTDataSource } = require('apollo-datasource-rest');
const { BACKEND_URL, SEASON } = require('../utils/restConsts');
const { handleError } = require('../utils/exceptionHandler');

class SeasonDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = BACKEND_URL;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getAllSeasons() {
        const seasons = await this.get(SEASON);
        return seasons;
    }

    async getPaginatedSeasons(pageNum, pageSize) {
        const  seasonPage = await this.get(`${SEASON}?pageNum=${pageNum}&pageSize=${pageSize}`);
        return seasonPage;
    }

    async getSeasonById(id) {
        try {
            const season = await this.get(`${SEASON}/${id}`);
            return season;
        } catch(error) {
            handleError(error);
        }
    }

    async addSeason(seasonPayload) {
        try {
           console.log('season payload');
           await this.post(`${SEASON}`, seasonPayload);
           return { status: 200, description: 'new season was added' };
        } catch(error) {
            handleError(error);
        }
    }

    async getAllTournments() {
        try {
           const tournments = await this.get(`${SEASON}/tournment`);
           return tournments; 
        } catch(error) {
            handleError(error);
        }
    }
}

module.exports = SeasonDataSource;