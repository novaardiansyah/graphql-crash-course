const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String,
    author: String,
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  }
];

const resolver = {
  Query: {
    books: () => books,
  }
}

const server = new ApolloServer({ typeDefs, resolvers: resolver });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});