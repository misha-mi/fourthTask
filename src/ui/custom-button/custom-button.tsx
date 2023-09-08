import { Pressable, Text, StyleSheet } from 'react-native';
import { ICustomButton } from './type';
import { useTheme } from '@react-navigation/native';
import Spinner from '../spinner/spinner';

const CustomButton = ({
  title,
  onClick,
  size = 'large',
  status = 'waiting',
  isRedText = false,
}: ICustomButton) => {
  const theme = useTheme().colors;

  const {
    buttonColor,
    pressedButtonColor,
    disabledButtonColor,
    textColor,
    pressedTextColor,
    disabledTextColor,
    cancelColor,
  } = size === 'large' ? theme.largeButtonColors : theme.mediumButtonColors;

  return (
    <Pressable
      disabled={status !== 'waiting'}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
        },
        styles.wrapper,
        styles[size],
        status === 'disabled' ? { backgroundColor: disabledButtonColor } : {},
      ]}>
      {status === 'loading' ? (
        <Spinner color={pressedButtonColor} />
      ) : (
        ({ pressed }) => (
          <Text
            style={[
              { color: pressed ? pressedTextColor : textColor },
              styles.text,
              status === 'disabled' ? { color: disabledTextColor } : {},
              isRedText ? { color: cancelColor } : {},
            ]}>
            {title}
          </Text>
        )
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  large: {
    height: 56,
    borderRadius: 21,
  },
  medium: {
    height: 44,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Outfit-SemiBold',
  },
});

export default CustomButton;
