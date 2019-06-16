const countryResolver = require('./countryResolver');
const teamResolver = require('./teamResolver');

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
      countries: countryResolver.getAllCountries,
      country: countryResolver.getCountryById,
      teams: teamResolver.getAllTeams,
      team: teamResolver.getTeamById,
      paginatedTeams: teamResolver.getPaginatedTeams,
    },
};

module.exports = resolvers;

