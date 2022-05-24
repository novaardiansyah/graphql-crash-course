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
    slug: String!,
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    animal(slug: String!): Animal
  }
`;

const resolver = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, context) => {
      let animal = animals.find((animal) => {
        return animal.slug === args.slug;
      });

      return animal;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers: resolver });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});