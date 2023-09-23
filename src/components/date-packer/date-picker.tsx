import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from '../../ui/custom-button/custom-button';

const DatePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Button title="Set date" onPress={() => setModalVisible(true)} />
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            ...styles.modalView,
            backgroundColor: '#131313',
            padding: 16,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Outfit-SemiBold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Pick the date of your birth
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: '#696969',
              marginTop: 18,
            }}></View>
          <View style={{ marginTop: 18 }}></View>
        </View>
        <View style={styles.modalView}>
          <CustomButton
            title="Confirm"
            size="medium"
            onClick={() => setModalVisible(false)}
          />
          <CustomButton
            title="Cancel"
            size="medium"
            onClick={() => setModalVisible(false)}
            isRedText
          />
        </View>
      </Modal>
    </View>
  );
};

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

export default DatePicker;
