const { ApolloClient, InMemoryCache } = require("@apollo/client");

const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clx9i9ttt081y07t8e6qb48ud/master",
  cache: new InMemoryCache(),
});

export default client;
