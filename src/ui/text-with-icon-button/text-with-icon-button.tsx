import { ReactElement } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const TextWithIconButton = ({
  onRenderSVG,
  text,
  isDisabled,
}: {
  onRenderSVG: (color: string) => ReactElement;
  text: string;
  isDisabled?: boolean;
}) => {
  const { defaultColor, pressedColor, disabledColor } =
    useTheme().colors.textButtonColors;

  return (
    <Pressable style={styles.wrapper} disabled={isDisabled}>
      {({ pressed }) => {
        const color = pressed
          ? pressedColor
          : isDisabled
          ? disabledColor
          : defaultColor;
        return (
          <>
            {onRenderSVG(color)}
            <Text
              style={[
                styles.text,
                {
                  color: color,
                },
              ]}>
              {text}
            </Text>
          </>
        );
      }}
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
