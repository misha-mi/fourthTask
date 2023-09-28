import { Pressable, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TPressed } from '../../types';
import { stylesText } from '../../global-styles';

const TextButton = ({ text, onClick, isDisabled }: ITextButton) => {
  const { defaultColor, pressedColor, disabledColor } =
    useTheme().colors.myColors.textButtonColors;

  const handlerPressButton = ({ pressed }: TPressed) => {
    const disabledButtonColor = isDisabled ? disabledColor : defaultColor;

    const color = pressed ? pressedColor : disabledButtonColor;

    return (
      <Text
        style={{
          ...stylesText.outfitMedium16,
          borderBottomWidth: 2,
          color: color,
          borderColor: color,
        }}>
        {text}
      </Text>
    );
  };

  return (
    <Pressable
      style={{ alignSelf: 'flex-start' }}
      disabled={isDisabled}
      onPressOut={onClick}>
      {handlerPressButton}
    </Pressable>
  );
};

export default TextButton;
