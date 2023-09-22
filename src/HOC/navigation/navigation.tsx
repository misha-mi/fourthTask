import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { ReactElement } from 'react';
import { CustomDarkTheme, CustomLightTheme } from './themes';
import { useColorScheme } from 'react-native';

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['shareyourtale://', 'https://internship-social-media.purrweb.com'],
  config: {
    screens: {
      PostPage: 'post/:id',
    },
  },
};

const Navigation = ({ children }: { children: ReactElement }) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <NavigationContainer
      linking={linking}
      theme={isDark ? CustomDarkTheme : CustomLightTheme}>
      {children}
    </NavigationContainer>
  );
};

export default Navigation;
