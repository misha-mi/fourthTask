import { Pressable } from 'react-native';
import { IIconButton } from './type';
import { useTheme } from '@react-navigation/native';
import { TPressed } from '../../types';

const IconButton = ({ status, onRenderSVG }: IIconButton) => {
  const { defaultColor, pressedColor, disabledColor } =
    useTheme().colors.iconButtonColors;

  const handlerPressButton = ({ pressed }: TPressed) => {
    const disabledButtonColor =
      status === 'disabled' ? disabledColor : defaultColor;
    const color = pressed ? pressedColor : disabledButtonColor;
    return onRenderSVG(color);
  };

  return (
    <Pressable disabled={status === 'disabled'}>{handlerPressButton}</Pressable>
  );
};

export default IconButton;
