import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import CloudSVG from '../../assets/svg/cloud-svg';
import { useTheme } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

const Upload = () => {
  const { backgroundColor, borderColor, textColor, cloudColor } =
    useTheme().colors.uploadColors;

  const emptyStyles = true
    ? { ...styles.border, borderColor: borderColor }
    : null;

  const getPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      includeBase64: true,
    }).then(console.log);
  };

  return (
    <View
      style={{
        ...styles.wrapper,
        ...emptyStyles,
        backgroundColor: backgroundColor,
      }}>
      <Pressable style={styles.pressable} onTouchEnd={getPhoto}>
        <CloudSVG color={cloudColor} />
        <Text style={{ ...styles.text, color: textColor }}>
          Upload your photo here
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 166,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 8,
    borderRadius: 24,
    overflow: 'hidden',
  },
  border: {
    borderStyle: 'dashed',
    borderWidth: 2,
  },
  pressable: {
    width: 'auto',
    height: 166,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Outfit-Medium',
  },
});

export default Upload;
