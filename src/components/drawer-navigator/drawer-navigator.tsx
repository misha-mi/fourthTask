import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfilePage from '../../pages/profile-page/profile-page';
import MainPage from '../../pages/main-page/main-page';
import CustomDrawer from '../custom-drawer/custom-drawer';
import { TDrawerNavigator } from '../../HOC/navigation/type';

const Drawer = createDrawerNavigator<TDrawerNavigator>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="MainPage" component={MainPage} />
      <Drawer.Screen name="Profile" component={ProfilePage} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
