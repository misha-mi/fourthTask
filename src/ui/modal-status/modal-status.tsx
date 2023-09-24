import Modal from 'react-native-modal';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../custom-button/custom-button';
import { useTheme } from '@react-navigation/native';

const ModalStatus = ({
  messages,
  setMessages,
}: {
  messages: string[] | null;
  setMessages: () => void;
}) => {
  const { color7, primaryPressed, errorColor } =
    useTheme().colors.defaultColors;

  const colorMessage = messages?.includes('Success')
    ? primaryPressed
    : errorColor;

  return (
    <Modal
      isVisible={Boolean(messages)}
      onBackdropPress={setMessages}
      style={{ alignItems: 'center', gap: 20 }}>
      <View
        style={[styles.modal, styles.padding15, { backgroundColor: color7 }]}>
        {messages?.map((item, id) => (
          <Text style={{ color: colorMessage, ...styles.text }} key={id}>
            {item}
          </Text>
        ))}
      </View>

      <View style={styles.modal}>
        <CustomButton
          title="Close"
          size="medium"
          onClick={setMessages}
          isRedText
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 250,
    gap: 10,
    overflow: 'hidden',
    borderRadius: 15,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  padding15: {
    padding: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ModalStatus;
