import { Pressable } from 'react-native';
import { IIconButtonProps } from './type';
import { useTheme } from '@react-navigation/native';
import { TPressed } from '../../types';

const IconButton = ({
  status,
  onRenderSVG,
  isActive,
  onClick,
}: IIconButtonProps) => {
  const { defaultColor, pressedColor, disabledColor } =
    useTheme().colors.myColors.iconButtonColors;

  const handlerPressButton = ({ pressed }: TPressed) => {
    const disabledButtonColor =
      status === 'disabled' ? disabledColor : defaultColor;

    const color = pressed || isActive ? pressedColor : disabledButtonColor;

    return onRenderSVG(color);
  };

  return (
    <Pressable disabled={status === 'disabled'} onTouchEnd={onClick}>
      {handlerPressButton}
    </Pressable>
  );
};

export default IconButton;
