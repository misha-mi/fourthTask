import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';

const { color4, primaryDefault, primaryPressed } = true
  ? DARK_THEME
  : LIGHT_THEME;

const TextButton = ({ text, onClick, isDisabled }: ITextButton) => {
  return (
    <Pressable style={styles.pressable}>
      {({ pressed }) => (
        <Text
          style={[
            styles.text,
            {
              color: pressed ? primaryPressed : primaryDefault,
              borderColor: pressed ? primaryPressed : primaryDefault,
            },
            isDisabled ? { color: color4, borderColor: color4 } : {},
          ]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  text: {
    borderBottomWidth: 2,
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
  },
  pressable: {
    alignSelf: 'flex-start',
  },
});
