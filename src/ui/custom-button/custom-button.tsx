import { Pressable, Text, StyleSheet } from 'react-native';
import { ICustomButton } from './type';
import { useTheme } from '@react-navigation/native';
import Spinner from '../spinner/spinner';
import { TPressed } from '../../types';
import { stylesText } from '../../global-styles';

const CustomButton = ({
  title,
  onClick,
  size = 'large',
  status = 'waiting',
  isRedText = false,
}: ICustomButton) => {
  const theme = useTheme().colors.myColors;

  const {
    buttonColor,
    pressedButtonColor,
    disabledButtonColor,
    textColor,
    pressedTextColor,
    disabledTextColor,
    cancelColor,
  } = size === 'large' ? theme.largeButtonColors : theme.mediumButtonColors;

  const handlerPressButton = ({ pressed }: TPressed) => {
    const disabledColor =
      status === 'disabled' ? disabledButtonColor : buttonColor;

    const backgroundColor = {
      backgroundColor: pressed ? pressedButtonColor : disabledColor,
    };

    return [backgroundColor, styles.wrapper, styles[size]];
  };

  const handlerPressContent = ({ pressed }: TPressed) => {
    const pressColor = { color: pressed ? pressedTextColor : textColor };

    const disabledContentColor =
      status === 'disabled' ? { color: disabledTextColor } : null;

    const colorRed = isRedText ? { color: cancelColor } : null;

    return (
      <Text
        style={[
          pressColor,
          stylesText.outfitSemiBold16,
          disabledContentColor,
          colorRed,
        ]}>
        {title}
      </Text>
    );
  };

  return (
    <Pressable
      disabled={status !== 'waiting'}
      style={handlerPressButton}
      onPressOut={onClick}>
      {status === 'loading' ? (
        <Spinner color={pressedButtonColor} />
      ) : (
        handlerPressContent
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
});

export default CustomButton;
