import { Pressable, StyleSheet } from 'react-native';
import { IIconButton } from './type';
import { useTheme } from '@react-navigation/native';

const IconButton = ({ status, onRenderSVG }: IIconButton) => {
  const { defaultColor, pressedColor, disabledColor } =
    useTheme().colors.iconButtonColors;

  const color = status === 'disabled' ? disabledColor : defaultColor;

  return (
    <Pressable disabled={status === 'disabled'}>
      {({ pressed }) => onRenderSVG(pressed ? pressedColor : color)}
    </Pressable>
  );
};

export default IconButton;
