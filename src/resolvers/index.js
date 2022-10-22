const countryResolver = require('./countryResolver');
const teamResolver = require('./teamResolver');
const sportResolver = require('./sportResolver');
const userResolver = require('./userResolver');

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
      countries: countryResolver.getAllCountries,
      country: countryResolver.getCountryById,
      teams: teamResolver.getAllTeams,
      team: teamResolver.getTeamById,
      paginatedTeams: teamResolver.getPaginatedTeams,
      paginatedCountries: countryResolver.paginatedCountries,
      userInfo: userResolver.userInfo,
      sports: sportResolver.getAllSports
    },
    Mutation: {
      updateTeams: teamResolver.updateTeams,
      addTeam: teamResolver.addTeam
    }
};

module.exports = resolvers;

