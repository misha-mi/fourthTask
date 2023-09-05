import {Pressable, Text, StyleSheet} from 'react-native';
import {ICustomButton} from './type';
import {LARGE_BUTTON_COLORS, MEDIUM_BUTTON_COLORS} from './colors';
import Spinner from '../spinner/spinner';

const CustomButton = ({
  title,
  onClick,
  size = 'large',
  status = 'waiting',
  isRedText = false,
}: ICustomButton) => {
  const {
    buttonColor,
    pressedButtonColor,
    disabledButtonColor,
    textColor,
    pressedTextColor,
    disabledTextColor,
  } = size === 'large' ? LARGE_BUTTON_COLORS : MEDIUM_BUTTON_COLORS;
  return (
    <Pressable
      disabled={status !== 'waiting'}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
        },
        styles.wrapper,
        styles[size],
        status === 'disabled' ? {backgroundColor: disabledButtonColor} : {},
      ]}>
      {status === 'loading' ? (
        <Spinner color={pressedButtonColor} />
      ) : (
        ({pressed}) => (
          <Text
            style={[
              {color: pressed ? pressedTextColor : textColor},
              styles.text,
              status === 'disabled' ? {color: disabledTextColor} : {},
              isRedText ? {color: '#C2534C'} : {},
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
