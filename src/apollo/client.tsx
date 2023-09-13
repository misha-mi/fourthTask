import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const apolloClient = new ApolloClient({
  uri: 'https://internship-social-media.purrweb.com/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
