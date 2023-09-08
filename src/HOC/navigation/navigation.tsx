import { NavigationContainer, useTheme } from '@react-navigation/native';
import { ReactElement, useEffect, useState } from 'react';
import { CustomDarkTheme, CustomLightTheme } from './themes';
import { useColorScheme } from 'react-native';

const Navigation = ({ children }: { children: ReactElement }) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={isDark ? CustomLightTheme : CustomDarkTheme}>
      {children}
    </NavigationContainer>
  );
};

export default Navigation;
