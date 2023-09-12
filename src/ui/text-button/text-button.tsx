import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TPressed } from '../../types';

const TextButton = ({ text, onClick, isDisabled }: ITextButton) => {
  const { defaultColor, pressedColor, disabledColor } =
    useTheme().colors.textButtonColors;

  const handlerPressButton = ({ pressed }: TPressed) => {
    const disabledButtonColor = isDisabled ? disabledColor : defaultColor;

    const color = pressed ? pressedColor : disabledButtonColor;

    return (
      <Text
        style={{
          ...styles.text,
          color: color,
          borderColor: color,
        }}>
        {text}
      </Text>
    );
  };

  return (
    <Pressable
      style={styles.pressable}
      disabled={isDisabled}
      onPressOut={onClick}>
      {handlerPressButton}
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
