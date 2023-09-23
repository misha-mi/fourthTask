import { StyleSheet, View } from 'react-native';
import ProfileImg from '../../ui/profile-img/profile-img';
import CameraSVG from '../../assets/svg/camera-svg';
import RoundButton from '../../ui/round-button/round-button';
import { useState } from 'react';
import CustomButton from '../../ui/custom-button/custom-button';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

const SetProfileImgComponent = ({ img, setImg }) => {
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
        <View style={style.position}>
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
          <View style={styles.modalView}>
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
          <View style={styles.modalView}>
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

const style = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

const styles = StyleSheet.create({
  modalView: {
    width: 'auto',
    margin: 20,
    borderRadius: 15,
    gap: 1,
    backgroundColor: '#696969',
    overflow: 'hidden',
  },
});

export default SetProfileImgComponent;
