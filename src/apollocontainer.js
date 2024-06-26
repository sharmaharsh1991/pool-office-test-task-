import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiUrl = "https://swapi-graphql.netlify.app/.netlify/functions/index";

export const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});
