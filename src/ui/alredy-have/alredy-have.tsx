import { View, Text, StyleSheet } from 'react-native';
import TextButton from '../text-button/text-button';

const AlreadyHave = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.already}>Already have an account?</Text>
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
