import { View, Text, StyleSheet } from 'react-native';
import PersonalInfoForm from '../forms/personal-info-form/personal-info-form';
import { Controller } from 'react-hook-form';
import { TControl } from '../../types';
import { useTheme } from '@react-navigation/native';
import SettingGender from '../setting-gender/setting-gender';
import AccountInfoForm from '../forms/account-info-form/account-info-form';
import Input from '../../ui/input/input';

const SettingPersonalInfo = ({ control }: TControl) => {
  const { color1 } = useTheme().colors.defaultColors;

  return (
    <View style={styles.gap16}>
      <Text style={[styles.title, { color: color1 }]}>Personal info</Text>
      <PersonalInfoForm control={control} />

      <View style={styles.mb32}>
        <Text style={[styles.title, { color: color1, marginBottom: 16 }]}>
          Gender
        </Text>
        <SettingGender />
      </View>

      <Text style={[styles.title, { color: color1 }]}>Date of birth</Text>
      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, value } }) => (
          <Input
            label="B-day"
            placeholder="Enter B-day"
            status={'waiting'}
            onChange={onChange}
            value={value}
            errorMessage={''}
          />
        )}
      />

      <Text style={[styles.title, { color: color1 }]}>Account info</Text>
      <AccountInfoForm control={control} />
    </View>
  );
};

const styles = StyleSheet.create({
  gap16: {
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Outfit-SemiBold',
  },
  mb32: {
    marginBottom: 32,
  },
});

export default SettingPersonalInfo;
