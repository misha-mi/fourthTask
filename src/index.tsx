import Navigation from './HOC/navigation/navigation';
import JoinUsPage from './pages/join-us-page/join-us-page';
import LogInPage from './pages/log-in-page/log-in-page';
import SuccessJoinUsPage from './pages/success-join-us-page/success-join-us-page';
import WelcomePage from './pages/welcome-page/welcome-page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useQuery } from '@apollo/client';
import { GET_USER } from './apollo/service/get-user';
import BootSplash from 'react-native-bootsplash';
import { useEffect } from 'react';
import PostPage from './pages/post-page/post-page';
import CreatePostPage from './pages/create-post-page/create-post-page';
import DrawerNavigator from './components/drawer-navigator/drawer-navigator';
const Stack = createNativeStackNavigator();

const Index = () => {
  const { data, loading } = useQuery(GET_USER, {
    errorPolicy: 'all',
  });

  useEffect(() => {
    if (!loading) BootSplash.hide({ fade: true });
  }, [loading]);

  return (
    <Navigation>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Drawer">
        {data?.userMe ? (
          <>
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            <Stack.Screen
              name="PostPage"
              component={PostPage}
              initialParams={{ id: '9a4cde44-c971-43dc-b419-543e250269ca' }}
            />
            <Stack.Screen name="CreatePost" component={CreatePostPage} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomePage} />
            <Stack.Screen name="JoinUs" component={JoinUsPage} />
            <Stack.Screen
              name="SuccessJoinUsPage"
              component={SuccessJoinUsPage}
            />
            <Stack.Screen name="LogIn" component={LogInPage} />
          </>
        )}
      </Stack.Navigator>
    </Navigation>
  );
};

export default Index;
