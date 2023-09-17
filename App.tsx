import { ApolloProvider } from '@apollo/client';
import Index from './src';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import apolloClient from './src/apollo/client';

function App(): JSX.Element {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <Index />
    </ApolloProvider>
  );
}

export default App;
