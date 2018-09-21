//configure your env file
require('dotenv').config();
//import the APolloServer instance to define your server
const { ApolloServer } = require('apollo-server');
//import your Type definitions which will define your type for your graphql server
const typeDefs = require('./typeDefs');
//import your resolvers which will define how your types are executed for your graphql server
const resolvers = require('./resolvers');
const PORT = 10000;

//Define yoru type definitions.
// const typeDefs = gql`
//     type Query {
//         hello: String
//     }
//     schema {
//         query: Query
//     }
// `;

// const resolvers = {
//     Query: {
//         hello: () => "Hello World!!"
//     }
// }

//Define your server, by defining a server and listening on the server.
const server = new ApolloServer({ typeDefs, resolvers });

//Listen on the server
server.listen({port: PORT}).then(function({url}) {
    console.log('Listining on ' + url);
});