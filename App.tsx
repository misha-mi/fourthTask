import { ApolloProvider } from '@apollo/client';
import Index from './src';
import apolloClient from './src/apollo/client';

function App(): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <Index />
    </ApolloProvider>
  );
}

export default App;
