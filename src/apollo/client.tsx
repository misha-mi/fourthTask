import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const apolloClient = new ApolloClient({
  uri: 'https://internship-social-media.purrweb.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZhZjUyYTUwLWYxNzctNGZhYS1hZGZhLWY0YjM1MTdkN2EwYiIsImVtYWlsIjoibUBtLnJ1IiwidG9rZW5UeXBlIjoiVVNFUiIsImV4cGlyYXRpb24iOiIyMDIzLTA5LTE3VDA0OjAwOjE5LjM3N1oiLCJpYXQiOjE2OTQ4NjI3MzksImV4cCI6MTY5NDkyMzIxOX0.2_PJ_9dbjceacFe0S8HcRGBHuIeYAFEGgPcSrom3z1U'}`,
  },
});

export default apolloClient;
