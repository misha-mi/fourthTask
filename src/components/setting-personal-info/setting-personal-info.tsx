import { View, Text } from 'react-native';
import PersonalInfoForm from '../forms/personal-info-form/personal-info-form';
import { Controller } from 'react-hook-form';
import { TControl } from '../../types';
import { useTheme } from '@react-navigation/native';
import SettingGender from '../setting-gender/setting-gender';
import AccountInfoForm from '../forms/account-info-form/account-info-form';
import DatePicker from '../date-picker/date-picker';
import { stylesText } from '../../global-styles';

const SettingPersonalInfo = ({ control }: TControl) => {
  const { color1 } = useTheme().colors.myColors.defaultColors;

  return (
    <View style={{ gap: 16 }}>
      <Text style={[stylesText.outfitSemiBold18, { color: color1 }]}>
        Personal info
      </Text>
      <PersonalInfoForm control={control} />

      <View style={{ marginBottom: 32 }}>
        <Text
          style={[
            stylesText.outfitSemiBold18,
            { color: color1, marginBottom: 16 },
          ]}>
          Gender
        </Text>
        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value } }) => (
            <SettingGender gender={value} setGender={onChange} />
          )}
        />
      </View>

      <Text style={[stylesText.outfitSemiBold18, { color: color1 }]}>
        Date of birth
      </Text>

      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, value } }) => (
          <DatePicker setDate={onChange} date={value} />
        )}
      />

      <Text style={[stylesText.outfitSemiBold18, { color: color1 }]}>
        Account info
      </Text>
      <AccountInfoForm control={control} />
    </View>
  );
};

export default SettingPersonalInfo;
