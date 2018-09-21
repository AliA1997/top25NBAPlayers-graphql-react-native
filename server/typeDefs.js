const { gql } = require('apollo-server');

const typeDefs = gql`
    type Mutation {
        player(name: String!, jerseyNumber: Int!, team: String!, rank: Int!): Player
    }
    type Query {
        players: [Player]
        player(name: String, rank: String): Player
    }
    type Player {
        name: String
        jerseyNumber: Int
        team: String
        rank: Int
    }
    schema {
        query: Query
        mutation: Mutation
    }
`;

module.exports = typeDefs;