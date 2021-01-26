const countryResolver = require('./countryResolver');
const teamResolver = require('./teamResolver');
const sportResolver = require('./sportResolver');
const seasonResolver = require('./seasonResolver');
const { GraphQLScalarType } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },

  parseValue(value) {
    return new Date(value).getTime(); // Convert incoming integer to Milliseconds
  },

  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // Convert hard-coded AST string to type expected by parseValue
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Date: dateScalar,
    Query: {
      countries: countryResolver.getAllCountries,
      country: countryResolver.getCountryById,
      teams: teamResolver.getAllTeams,
      team: teamResolver.getTeamById,
      paginatedTeams: teamResolver.getPaginatedTeams,
      paginatedCountries: countryResolver.paginatedCountries,
      sports: sportResolver.getAllSports,
      seasons: seasonResolver.getAllSeasons,
      season: seasonResolver.getSeasonById,
      tournments: seasonResolver.getAllTournments,
      paginatedSeasons: seasonResolver.getPaginatedSeasons
    },
    Mutation: {
      updateTeams: teamResolver.updateTeams,
      addTeam: teamResolver.addTeam,
      addSeason: seasonResolver.addSeason
    }
};

module.exports = resolvers;

