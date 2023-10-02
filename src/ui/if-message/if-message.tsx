import { View, Text, StyleSheet } from 'react-native';
import TextButton from '../text-button/text-button';
import { useTheme } from '@react-navigation/native';
import { IIfMessageProps } from './type';
import { stylesText } from '../../global-styles';

const IfMessage = ({ ifMessage, thenMessage, onClick }: IIfMessageProps) => {
  const textColor = useTheme().colors.myColors.defaultColors.color1;

  return (
    <View style={styles.wrapper}>
      <Text style={{ ...stylesText.outfitRegular16, color: textColor }}>
        {ifMessage}
      </Text>
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
});

export default IfMessage;
