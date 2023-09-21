import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfilePage from '../../pages/profile-page/profile-page';
import MainPage from '../../pages/main-page/main-page';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="MainPage" component={MainPage} />
      <Drawer.Screen name="Profile" component={ProfilePage} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
