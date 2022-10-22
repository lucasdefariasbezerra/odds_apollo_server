const { ApolloServer, gql } = require('apollo-server');
const CountryDataSource = require('./connect/countryDataSource');
const TeamDataSource = require('./connect/teamDataSource');
const SportDataSource = require('./connect/sportDataSource');
const UserDataSource = require('./connect/userDataSource');
const resolvers = require('./resolvers/index');

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Sport {
    id: ID
    name: String
  }

  type User {
    id: ID
    username: String
  }

  type Team {
    id: ID
    name: String
    country:Country
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
    country: countryPayload
  }

  input sportPayload {
    id: ID
    name: String
  }

  input countryPayload {
    id: ID
    name: String
    threeLetterCode: String
  }

  type Query {
    countries: [Country]
    country(id: ID!): Country
    paginatedCountries(pageNum: Int, pageSize: Int): CountryPage
    teams: [Team]
    sports: [Sport]
    team(id: ID): Team
    userInfo: User
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
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      return { token };
    },
    dataSources: () => {
      return {
        countryDataSource: new CountryDataSource(),
        teamDataSource: new TeamDataSource(),
        sportDataSource: new SportDataSource(),
        userDataSource: new UserDataSource(),
      };
    }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});