import { View, Text, StyleSheet } from 'react-native';
import TextButton from '../text-button/text-button';
import { useTheme } from '@react-navigation/native';

const AlreadyHave = () => {
  const textColor = useTheme().colors.defaultColors.color1;

  return (
    <View style={styles.wrapper}>
      <Text style={{ ...styles.already, color: textColor }}>
        Already have an account?
      </Text>
      <TextButton text="Log in" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  already: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default AlreadyHave;
