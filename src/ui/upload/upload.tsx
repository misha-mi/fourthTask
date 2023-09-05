import {Image, Pressable, Text, View, StyleSheet} from 'react-native';
import CloudSVG from '../../assets/svg/cloud-svg';
import {UPLOAD_COLORS} from './colors';

const {backgroundColor, borderColor, textColor, cloudColor} = UPLOAD_COLORS;

const Upload = ({isEmpty}: {isEmpty: boolean}) => {
  return (
    <View style={[styles.wrapper, , isEmpty ? styles.border : {}]}>
      {isEmpty ? (
        <Pressable style={styles.pressable}>
          <CloudSVG color={cloudColor} />
          <Text style={styles.text}>Upload your photo here</Text>
        </Pressable>
      ) : (
        <Image source={require('../../assets/img/upload.jpg')} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 166,
    width: 'auto',
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 8,
    borderRadius: 24,
    overflow: 'hidden',
  },
  border: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: borderColor,
  },
  pressable: {
    width: 'auto',
    height: 166,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: textColor,
    fontSize: 14,
    fontFamily: 'Outfit-Medium',
  },
});

export default Upload;
