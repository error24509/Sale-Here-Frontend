import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});