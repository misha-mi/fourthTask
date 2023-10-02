import { StyleSheet, Text, View } from 'react-native';
import CheckInput from '../../ui/check-input/check-input';
import { useTheme } from '@react-navigation/native';
import { ISettingGenderProps } from './type';
import { stylesText } from '../../global-styles';

const SettingGender = ({ gender, setGender }: ISettingGenderProps) => {
  const { color1 } = useTheme().colors.myColors.defaultColors;

  return (
    <View style={styles.gap16}>
      <View style={styles.wrapper}>
        <CheckInput
          type="round"
          isChecked={gender === 'MALE'}
          setIsChecked={() => setGender('MALE')}
        />
        <Text style={{ ...stylesText.outfitRegular16, color: color1 }}>
          Male
        </Text>
      </View>
      <View style={styles.wrapper}>
        <CheckInput
          type="round"
          isChecked={gender === 'FEMALE'}
          setIsChecked={() => setGender('FEMALE')}
        />
        <Text style={{ ...stylesText.outfitRegular16, color: color1 }}>
          Female
        </Text>
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
});

export default SettingGender;
