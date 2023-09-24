import { Pressable, StyleSheet, Text, View } from 'react-native';
import CopySVG from '../../assets/svg/copy-svg';
import { useTheme } from '@react-navigation/native';
import { ICopyInput } from './type';
import Spinner from '../spinner/spinner';
import { TPressed } from '../../types';

const CopyInput = ({ textCopy, status }: ICopyInput) => {
  const {
    defaultBackgroundColor,
    pressedBackgroundColor,
    disabledBackgroundColor,
    defaultTextColor,
    pressedTextColor,
    disabledTextColor,
  } = useTheme().colors.myColors.copyInputColors;

  const handlerPressButton = ({ pressed }: TPressed) => {
    const disabledColor =
      status === 'disabled' ? disabledBackgroundColor : defaultBackgroundColor;

    const backgroundColor = {
      backgroundColor: pressed ? pressedBackgroundColor : disabledColor,
    };

    return [backgroundColor, styles.pressable];
  };

  const handlerPressContent = ({ pressed }: TPressed) => {
    const disabledColor =
      status === 'disabled' ? disabledTextColor : defaultTextColor;

    const contentColor = pressed ? pressedTextColor : disabledColor;
    return (
      <>
        <Text
          style={{
            ...styles.text,
            color: contentColor,
          }}>
          {textCopy}
        </Text>

        <CopySVG style={styles.copySVG} color={contentColor} />
      </>
    );
  };

  return (
    <Pressable
      disabled={status === 'loading' || status === 'disabled'}
      style={handlerPressButton}>
      {status === 'loading' ? (
        <View style={styles.spinner}>
          <Spinner color={pressedBackgroundColor} />
        </View>
      ) : (
        handlerPressContent
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
