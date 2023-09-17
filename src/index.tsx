import Navigation from './HOC/navigation/navigation';
import JoinUsPage from './pages/join-us-page/join-us-page';
import LogInPage from './pages/log-in-page/log-in-page';
import SuccessJoinUsPage from './pages/success-join-us-page/success-join-us-page';
import WelcomePage from './pages/welcome-page/welcome-page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLazyQuery, useQuery } from '@apollo/client';
import ProfilePage from './pages/profile-page/profile-page';
import MainPage from './pages/main-page/main-page';
import { getToken } from './storage/storage';
import { GET_USER } from './apollo/service/get-user';
import { useEffect } from 'react';

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

  const { data } = useQuery(GET_USER, {
    onCompleted: console.log,
    onError: console.log,
    errorPolicy: 'all',
  });

  return (
    <Navigation>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {true ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomePage} />
            <Stack.Screen name="JoinUs" component={JoinUsPage} />
            <Stack.Screen
              name="SuccessJoinUsPage"
              component={SuccessJoinUsPage}
            />
            <Stack.Screen name="LogIn" component={LogInPage} />
          </>
        ) : (
          <>
            <Stack.Screen name="Main" component={MainPage} />
            <Stack.Screen name="Profile" component={ProfilePage} />
          </>
        )}
      </Stack.Navigator>
    </Navigation>
  );
};

export default Index;
