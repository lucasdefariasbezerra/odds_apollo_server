const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080/api/';
const AUTH_URL = process.env.BACKEND_URL || 'http://localhost:8083/api/';

const COUNTRY = 'country';
const USER = 'user';
const TEAM= 'team';
const SPORT= 'sport';

module.exports = {
    BACKEND_URL,
    USER,
    AUTH_URL,
    COUNTRY,
    TEAM,
    SPORT
}