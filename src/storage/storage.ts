import AsyncStorage from '@react-native-async-storage/async-storage';
import { TColorTheme } from '../types';

export const setToken = async (value: string) => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    return value;
  } catch (e) {
    // error reading value
  }
};

export const setTheme = async (value: TColorTheme) => {
  try {
    await AsyncStorage.setItem('theme', value);
  } catch (e) {
    // saving error
  }
};

export const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem('theme');
    return value;
  } catch (e) {
    // error reading value
  }
};
