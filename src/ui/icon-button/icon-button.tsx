import { Pressable, StyleSheet } from 'react-native';
import { ICON_BUTTON_COLORS } from './colors';
import { IIconButton } from './type';

const { defaultColor, pressedColor, disabledColor } = ICON_BUTTON_COLORS;

const IconButton = ({ status, onRenderSVG }: IIconButton) => {
  const color = status === 'disabled' ? disabledColor : defaultColor;

  return (
    <Pressable disabled={status === 'disabled'}>
      {({ pressed }) => onRenderSVG(pressed ? pressedColor : color)}
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default IconButton;
