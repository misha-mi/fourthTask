import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { ReactElement, useEffect } from 'react';
import { CustomDarkTheme, CustomLightTheme } from './themes';
import { Appearance, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['shareyourtale://'],
  config: {
    screens: {
      PostPage: 'post/:id',
    },
  },
};

const Navigation = ({ children }: { children: ReactElement }) => {
  const isDark = useColorScheme() === 'dark';

  useEffect(() => {
    AsyncStorage.getItem('theme').then(res => {
      if (res === 'dark' || res === 'light') {
        Appearance.setColorScheme(res);
      } else {
        Appearance.setColorScheme('dark');
      }
    });
  }, []);

  return (
    <NavigationContainer
      linking={linking}
      theme={isDark ? CustomDarkTheme : CustomLightTheme}>
      {children}
    </NavigationContainer>
  );
};

export default Navigation;
