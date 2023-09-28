import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import CloudSVG from '../../assets/svg/cloud-svg';
import { useTheme } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { IUpload } from './type';
import { stylesText } from '../../global-styles';

const Upload = ({ img, setImg }: IUpload) => {
  const { backgroundColor, borderColor, textColor, cloudColor } =
    useTheme().colors.myColors.uploadColors;

  const emptyStyles = !img
    ? { ...styles.border, borderColor: borderColor }
    : null;

  const changePhoto = async () => {
    ImagePicker.openPicker({}).then(setImg);
  };

  return (
    <View
      style={{
        ...styles.wrapper,
        ...emptyStyles,
        backgroundColor: backgroundColor,
      }}>
      {!img ? (
        <Pressable style={styles.pressable} onTouchEnd={changePhoto}>
          <CloudSVG color={cloudColor} />
          <Text style={{ ...stylesText.outfitMedium14, color: textColor }}>
            Upload your photo here
          </Text>
        </Pressable>
      ) : (
        <Image source={{ uri: img?.path }} style={{ height: 166 }} />
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
});

export default Upload;
