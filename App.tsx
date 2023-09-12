import Index from './src';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';

function App(): JSX.Element {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return <Index />;
}

export default App;
