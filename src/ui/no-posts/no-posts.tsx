import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { INoPosts } from './type';
import { stylesText } from '../../global-styles';

const NoPosts = ({ message }: INoPosts) => {
  const { titleColor, textColor, backgroundColor } =
    useTheme().colors.myColors.noPostsColors;

  return (
    <View style={styles.wrapper}>
      <Text
        style={[
          stylesText.nokwy55,
          { color: titleColor, backgroundColor: backgroundColor },
        ]}>
        UPS
      </Text>
      <Text
        style={[
          styles.textWrapper,
          stylesText.outfitRegular16,
          { color: textColor },
        ]}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  textWrapper: {
    width: 240,
    textAlign: 'center',
  },
});

export default NoPosts;
