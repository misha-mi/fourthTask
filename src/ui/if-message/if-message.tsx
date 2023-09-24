import { View, Text, StyleSheet } from 'react-native';
import TextButton from '../text-button/text-button';
import { useTheme } from '@react-navigation/native';
import { IIfMessage } from './type';

const IfMessage = ({ ifMessage, thenMessage, onClick }: IIfMessage) => {
  const textColor = useTheme().colors.myColors.defaultColors.color1;

  return (
    <View style={styles.wrapper}>
      <Text style={{ ...styles.already, color: textColor }}>{ifMessage}</Text>
      <TextButton text={thenMessage} onClick={onClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  already: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default IfMessage;
