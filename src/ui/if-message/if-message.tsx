import { View, Text, StyleSheet } from 'react-native';
import TextButton from '../text-button/text-button';
import { useTheme } from '@react-navigation/native';

const IfMessage = ({
  ifMessage,
  thenMessage,
}: {
  ifMessage: string;
  thenMessage: string;
}) => {
  const textColor = useTheme().colors.defaultColors.color1;

  return (
    <View style={styles.wrapper}>
      <Text style={{ ...styles.already, color: textColor }}>{ifMessage}</Text>
      <TextButton text={thenMessage} />
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
