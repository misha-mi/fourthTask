import { Pressable, StyleSheet, Text, View } from 'react-native';
import CopySVG from '../../assets/svg/copy-svg';
import { useTheme } from '@react-navigation/native';
import { ICopyInput } from './type';
import Spinner from '../spinner/spinner';

const CopyInput = ({ textCopy, status }: ICopyInput) => {
  const {
    defaultBackgroundColor,
    pressedBackgroundColor,
    disabledBackgroundColor,
    defaultTextColor,
    pressedTextColor,
    disabledTextColor,
  } = useTheme().colors.copyInputColors;

  return (
    <Pressable
      disabled={status === 'loading' || status === 'disabled'}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? pressedBackgroundColor
            : defaultBackgroundColor,
        },
        styles.pressable,
        status === 'disabled'
          ? { backgroundColor: disabledBackgroundColor }
          : {},
      ]}>
      {status === 'loading' ? (
        <View style={styles.spinner}>
          <Spinner color={pressedBackgroundColor} />
        </View>
      ) : (
        ({ pressed }) => (
          <>
            <Text
              style={[
                styles.text,
                { color: pressed ? pressedTextColor : defaultTextColor },
                status === 'disabled' ? { color: disabledTextColor } : {},
              ]}>
              {textCopy}
            </Text>

            <CopySVG
              style={styles.copySVG}
              color={
                pressed
                  ? pressedTextColor
                  : status === 'disabled'
                  ? disabledTextColor
                  : defaultTextColor
              }
            />
          </>
        )
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: 'auto',
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    fontSize: 23,
    fontFamily: 'Outfit-Regular',
  },
  copySVG: {
    position: 'absolute',
    right: 16,
  },
  spinner: {
    alignSelf: 'center',
  },
});

export default CopyInput;
