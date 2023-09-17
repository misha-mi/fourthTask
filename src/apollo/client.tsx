import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const apolloClient = new ApolloClient({
  uri: 'https://internship-social-media.purrweb.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZhZjUyYTUwLWYxNzctNGZhYS1hZGZhLWY0YjM1MTdkN2EwYiIsImVtYWlsIjoibUBtLnJ1IiwidG9rZW5UeXBlIjoiVVNFUiIsImV4cGlyYXRpb24iOiIyMDIzLTA5LTE3VDIzOjQ2OjAxLjcyNloiLCJpYXQiOjE2OTQ5MzM4ODEsImV4cCI6MTY5NDk5NDM2MX0.7gM-UFOHWyDsHpRkoAwtEuTJLBMCY7F47-3Grl_dlHY'}`,
  },
});

export default apolloClient;
