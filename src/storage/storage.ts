import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (value: string) => {
  await AsyncStorage.setItem('token', value);
};

export const getToken = async () => {
  const value = await AsyncStorage.getItem('token');
  return value;
};
