import { Pressable, StyleSheet } from 'react-native';
import { IRoundButton } from './type';
import {
  CLOSE_ROUND_BUTTON_COLORS,
  DEFAULT_ROUND_BUTTON_COLORS,
} from './colors';

const RoundButton = ({
  onRenderSVG,
  isCloseButton,
  isDisabled,
  size,
}: IRoundButton) => {
  const {
    defaultColor,
    defaultIconColor,
    pressColor,
    pressIconColor,
    disabledColor,
    disabledIconColor,
  } = isCloseButton ? CLOSE_ROUND_BUTTON_COLORS : DEFAULT_ROUND_BUTTON_COLORS;

  return (
    <Pressable
      disabled={isDisabled}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? pressColor
            : isDisabled
            ? disabledColor
            : defaultColor,
        },
        styles[size],
        styles.wrapper,
      ]}>
      {({ pressed }) =>
        onRenderSVG(
          pressed
            ? pressIconColor
            : isDisabled
            ? disabledIconColor
            : defaultIconColor,
        )
      }
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
