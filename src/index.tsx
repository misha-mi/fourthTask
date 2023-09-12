import Navigation from './HOC/navigation/navigation';
import JoinUsPage from './components/join-us-page/join-us-page';
import WelcomePage from './components/welcome-page/welcome-page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Index = () => {
  // const handlerChangeColorTheme = () => {
  //   const theme = Appearance.getColorScheme();
  //   if (theme === 'dark') {
  //     Appearance.setColorScheme('light');
  //   } else {
  //     Appearance.setColorScheme('dark');
  //   }
  // };

  return (
    <Navigation>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="JoinUs" component={JoinUsPage} />
      </Stack.Navigator>
    </Navigation>
  );
};

export default Index;
