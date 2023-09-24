import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

interface INoPosts {
  message: string;
}

const NoPosts = ({ message }: INoPosts) => {
  const { titleColor, textColor, backgroundColor } =
    useTheme().colors.myColors.noPostsColors;

  return (
    <View style={styles.wrapper}>
      <Text
        style={[
          styles.title,
          { color: titleColor, backgroundColor: backgroundColor },
        ]}>
        UPS
      </Text>
      <Text style={{ ...styles.text, color: textColor }}>{message}</Text>
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
  title: {
    padding: 20,
    paddingBottom: 12,
    paddingTop: 12,
    fontFamily: 'Nokwy',
    fontSize: 55,
    transform: [{ rotate: '-3deg' }],
  },
  text: {
    width: 240,
    textAlign: 'center',
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
  },
});

export default NoPosts;
