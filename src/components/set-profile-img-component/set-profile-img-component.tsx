import { StyleSheet, View } from 'react-native';
import ProfileImg from '../../ui/profile-img/profile-img';
import CameraSVG from '../../assets/svg/camera-svg';
import RoundButton from '../../ui/round-button/round-button';
import { useState } from 'react';
import CustomButton from '../../ui/custom-button/custom-button';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import { ISetProfileImgComponent } from './type';
import { useTheme } from '@react-navigation/native';

const SetProfileImgComponent = ({ img, setImg }: ISetProfileImgComponent) => {
  const { color4 } = useTheme().colors.myColors.defaultColors;

  const [modalVisible, setModalVisible] = useState(false);

  const getPhoto = () => {
    ImagePicker.openPicker({
      width: 160,
      height: 160,
      cropping: true,
      cropperCircleOverlay: true,
    }).then(image => {
      setModalVisible(false);
      setImg(image.path);
    });
  };

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 160,
      height: 160,
      cropping: true,
      cropperCircleOverlay: true,
    }).then(image => {
      setModalVisible(false);
      setImg(image.path);
    });
  };

  const deletePhoto = () => {
    setImg('');
    setModalVisible(false);
  };

  return (
    <View>
      <View style={{ position: 'relative' }}>
        <ProfileImg userImg={img} />
        <View style={styles.position}>
          <RoundButton
            onRenderSVG={color => <CameraSVG color={color} />}
            size="medium"
            onClick={() => setModalVisible(true)}
          />
        </View>
      </View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ ...styles.modalView, backgroundColor: color4 }}>
            <CustomButton
              title="Take a photo"
              size="medium"
              onClick={takePhoto}
            />
            <CustomButton
              title="Choose from the library"
              size="medium"
              onClick={getPhoto}
            />
            <CustomButton
              title="Delete photo"
              size="medium"
              onClick={deletePhoto}
              isRedText
            />
          </View>
          <View style={{ ...styles.modalView, backgroundColor: color4 }}>
            <CustomButton
              title="Cancel"
              size="medium"
              onClick={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  modalView: {
    width: 'auto',
    margin: 20,
    borderRadius: 15,
    gap: 1,
    overflow: 'hidden',
  },
});

export default SetProfileImgComponent;
