const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080/api/';
const AUTH_URL = process.env.BACKEND_URL || 'http://localhost:8083/api/';

const COUNTRY = 'country';
const TEAM='team';
const SPORT='sport';
const SEASON='season';
const MATCH='match';
const USER = 'user';

module.exports = {
    BACKEND_URL,
    USER,
    AUTH_URL,
    COUNTRY,
    TEAM,
    SPORT,
    SEASON,
    MATCH,
}