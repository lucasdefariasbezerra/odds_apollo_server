const { ApolloServer, gql } = require('apollo-server');
const CountryDataSource = require('./connect/countryDataSource');
const TeamDataSource = require('./connect/teamDataSource');
const SportDataSource = require('./connect/sportDataSource');
const resolvers = require('./resolvers/index');

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Sport {
    id: ID
    name: String
  }

  type Team {
    id: ID
    name: String
    sport: Sport
  }

  type TeamPage {
    total: Int
    items: [Team]
  }

  type CountryPage {
    total: Int
    items: [Country]
  }
  
  type Country {
    id: ID
    name: String
    threeLetterCode: String 
    region: String
  }

  type Message {
    status: Int
    description: String
  }

  input teamRequestPayload {
    id: ID
    name: String
    sport: sportPayload
  }

  input sportPayload {
    id: ID,
    name: String
  }

  type Query {
    countries: [Country]
    country(id: ID!): Country
    paginatedCountries(pageNum: Int, pageSize: Int): CountryPage
    teams: [Team]
    sports: [Sport]
    team(id: ID): Team
    paginatedTeams(pageNum: Int, pageSize: Int): TeamPage 
  }

  type Mutation {
    updateTeams(teamPayload: teamRequestPayload): Message
    addTeam(teamPayload: teamRequestPayload): Message
  }
`;


// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        countryDataSource: new CountryDataSource(),
        teamDataSource: new TeamDataSource(),
        sportDataSource: new SportDataSource(),
      };
    }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});