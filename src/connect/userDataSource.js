const { RESTDataSource } = require('apollo-datasource-rest');
const { AUTH_URL, USER } = require('../utils/restConsts');
const { handleError } = require('../utils/exceptionHandler');

class CountryDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = AUTH_URL;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async currentUser() {
        const currentUser = await this.get(`${USER}/current-user`);
        const { id, username } = currentUser;
        return { id, username };     
    }

    


}

module.exports = CountryDataSource;