const { ApolloServer, gql } = require('apollo-server');
const CountryDataSource = require('./connect/countryDataSource');
const TeamDataSource = require('./connect/teamDataSource');
const SportDataSource = require('./connect/sportDataSource');
const SeasonDataSource = require('./connect/seasonDataSource');
const MatchDataSource = require('./connect/matchDataSource');
const resolvers = require('./resolvers/index');

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  scalar Date 
  type Sport {
    id: ID
    name: String
  }

  type Team {
    id: ID
    name: String
    country:Country
    sport: Sport
  }

  type Match {
    id: ID
    seasonId: Int
    groupDesc: String
    groupKey: String
    teamHome: String
    teamAway: String
    scoreHome: Int
    scoreAway: Int
    round: Int
    date: String
    processed: Int
  }

  type MatchPage {
    total: Int
    items: [Match]
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

  type Season {
    id: ID
    name: String
    type: String
    description: String
    seasonDate: String
  }

  type Tournment {
    id: ID
    name: String
    description: String
  }


  type SeasonPage {
    total: Int
    items: [Season]
  }

  type Message {
    status: Int
    description: String
  }

  input seasonRequestPayload {
    id: ID
    nameRight: String
    type: String
    seasonStart: Date
    seasonEnd: Date
    tournment: tournmentPayload
  }

  input ScoreUpdatePayload {
    id: Int
    scoreHome: Int
    scoreAway: Int
  }

  input tournmentPayload {
    id: ID
    name: String
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
    teams: [Team]
    seasons: [Season]
    tournments: [Tournment]
    sports: [Sport]
    team(id: ID): Team
    season(id: ID): Season
    country(id: ID!): Country
    paginatedTeams(pageNum: Int, pageSize: Int): TeamPage
    paginatedCountries(pageNum: Int, pageSize: Int): CountryPage
    paginatedSeasons(pageNum: Int, pageSize: Int): SeasonPage
    paginatedMatches(pageNum:Int, pageSize: Int, seasonId: Int): MatchPage 
  }

  type Mutation {
    updateTeams(teamPayload: teamRequestPayload): Message
    addTeam(teamPayload: teamRequestPayload): Message
    addSeason(seasonPayload: seasonRequestPayload): Message
    updateScores(scoreUpdatePayload: [ScoreUpdatePayload]): Message
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
        seasonDataSource: new SeasonDataSource(),
        matchDataSource: new MatchDataSource()
      };
    }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});