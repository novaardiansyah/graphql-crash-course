const { ApolloServer, gql } = require('apollo-server');
const { mainCards, animals } = require('./db');

const typeDefs = gql`
  type MainCard {
    title: String,
    image: String,
  }

  type Animal {
    title: String!,
    name: String!,
    image: String!,
    rating: Float!,
    price: Float!,
    estimatedDelivery: String!,
    description: [String!]!,
    stock: Int!,
    onSale: Boolean,
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal]
  }
`;

const resolver = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
  }
}

const server = new ApolloServer({ typeDefs, resolvers: resolver });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});