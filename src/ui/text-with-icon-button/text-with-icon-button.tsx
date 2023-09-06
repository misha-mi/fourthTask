import { ReactElement } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';

const { color1, color4, primaryPressed } = true ? LIGHT_THEME : DARK_THEME;

const TextWithIconButton = ({
  onRenderSVG,
  text,
  isDisabled,
}: {
  onRenderSVG: (color: string) => ReactElement;
  text: string;
  isDisabled?: boolean;
}) => {
  return (
    <Pressable style={styles.wrapper} disabled={isDisabled}>
      {({ pressed }) => {
        const color = pressed ? primaryPressed : isDisabled ? color4 : color1;
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
