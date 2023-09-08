import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const TextButton = ({ text, onClick, isDisabled }: ITextButton) => {
  const { defaultColor, pressedColor, dsiabledColor } =
    useTheme().colors.textButtonColors;

  return (
    <Pressable style={styles.pressable}>
      {({ pressed }) => (
        <Text
          style={[
            styles.text,
            {
              color: pressed ? pressedColor : defaultColor,
              borderColor: pressed ? pressedColor : defaultColor,
            },
            isDisabled
              ? { color: dsiabledColor, borderColor: dsiabledColor }
              : null,
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
