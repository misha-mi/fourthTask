import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import CloudSVG from '../../assets/svg/cloud-svg';
import { useTheme } from '@react-navigation/native';

const Upload = ({ isEmpty }: { isEmpty: boolean }) => {
  const { backgroundColor, borderColor, textColor, cloudColor } =
    useTheme().colors.uploadColors;

  return (
    <View
      style={[
        styles.wrapper,
        isEmpty ? { ...styles.border, borderColor: borderColor } : {},
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      {isEmpty ? (
        <Pressable style={styles.pressable}>
          <CloudSVG color={cloudColor} />
          <Text style={{ ...styles.text, color: textColor }}>
            Upload your photo here
          </Text>
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
