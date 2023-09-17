import Navigation from './HOC/navigation/navigation';
import JoinUsPage from './pages/join-us-page/join-us-page';
import LogInPage from './pages/log-in-page/log-in-page';
import SuccessJoinUsPage from './pages/success-join-us-page/success-join-us-page';
import WelcomePage from './pages/welcome-page/welcome-page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apollo/client';
import ProfilePage from './pages/profile-page/profile-page';
import MainPage from './pages/main-page/main-page';
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
    <ApolloProvider client={apolloClient}>
      <Navigation>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="JoinUs" component={JoinUsPage} />
          <Stack.Screen
            name="SuccessJoinUsPage"
            component={SuccessJoinUsPage}
          />
          <Stack.Screen name="LogIn" component={LogInPage} />
          <Stack.Screen name="Main" component={MainPage} />
          <Stack.Screen name="Profile" component={ProfilePage} />
        </Stack.Navigator>
      </Navigation>
    </ApolloProvider>
  );
};

export default Index;
