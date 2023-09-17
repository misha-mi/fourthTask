import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { getToken } from '../storage/storage';

const apolloClient = new ApolloClient({
  uri: 'https://internship-social-media.purrweb.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export default apolloClient;
