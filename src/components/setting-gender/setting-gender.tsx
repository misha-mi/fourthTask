import { StyleSheet, Text, View } from 'react-native';
import CheckInput from '../../ui/check-input/check-input';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';

const SettingGender = ({
  gender,
  setGender,
}: {
  gender: 'Male' | 'Female';
  setGender: (value: 'Male' | 'Female') => void;
}) => {
  const { color1 } = useTheme().colors.defaultColors;

  return (
    <View style={styles.gap16}>
      <View style={styles.wrapper}>
        <CheckInput
          type="round"
          isChecked={gender === 'Male'}
          setIsChecked={() => setGender('Male')}
        />
        <Text style={{ ...styles.text, color: color1 }}>Male</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckInput
          type="round"
          isChecked={gender === 'Female'}
          setIsChecked={() => setGender('Female')}
        />
        <Text style={{ ...styles.text, color: color1 }}>Female</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gap16: {
    gap: 16,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
  },
});

export default SettingGender;
