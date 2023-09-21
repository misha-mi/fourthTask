import { Pressable, StyleSheet } from 'react-native';
import { IRoundButton } from './type';
import { useTheme } from '@react-navigation/native';
import { TPressed } from '../../types';

const RoundButton = ({
  onRenderSVG,
  isCloseButton,
  isDisabled,
  size,
  onClick,
}: IRoundButton) => {
  const { closeRoundButtonColors, defaultRoundButtonColors } =
    useTheme().colors;

  const {
    defaultColor,
    defaultIconColor,
    pressColor,
    pressIconColor,
    disabledColor,
    disabledIconColor,
  } = isCloseButton ? closeRoundButtonColors : defaultRoundButtonColors;

  const handlerPressButton = ({ pressed }: TPressed) => {
    const disabledButtonColor = isDisabled ? disabledColor : defaultColor;

    const backgroundColor = {
      backgroundColor: pressed ? pressColor : disabledButtonColor,
    };

    return [backgroundColor, styles[size], styles.wrapper];
  };

  const handlerPressContent = ({ pressed }: TPressed) => {
    const disabledContentColor = isDisabled
      ? disabledIconColor
      : defaultIconColor;

    const color = pressed ? pressIconColor : disabledContentColor;

    return onRenderSVG(color);
  };

  return (
    <Pressable
      disabled={isDisabled}
      style={handlerPressButton}
      onTouchEnd={onClick}>
      {handlerPressContent}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  large: {
    width: 56,
    height: 56,
  },
  medium: {
    width: 38,
    height: 38,
  },
  small: {
    width: 29,
    height: 29,
  },
});

export default RoundButton;
