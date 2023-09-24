import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ITextWithIconButton } from './types';
import { TPressed } from '../../types';

const TextWithIconButton = ({
  onRenderSVG,
  text,
  isDisabled,
  onClick,
}: ITextWithIconButton) => {
  const { defaultColor, pressedColor, disabledColor } =
    useTheme().colors.myColors.textWithIconButtonColors;

  const handlerPressContent = ({ pressed }: TPressed) => {
    const disabledContentColor = isDisabled ? disabledColor : defaultColor;
    const color = pressed ? pressedColor : disabledContentColor;

    return (
      <>
        {onRenderSVG(color)}
        <Text
          style={{
            ...styles.text,
            color: color,
          }}>
          {text}
        </Text>
      </>
    );
  };

  return (
    <Pressable
      style={styles.wrapper}
      disabled={isDisabled}
      onTouchEnd={onClick}>
      {handlerPressContent}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Outfit-Regular',
  },
});

export default TextWithIconButton;
