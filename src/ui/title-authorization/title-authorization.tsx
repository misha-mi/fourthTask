import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';

interface ITitleAuthorization {
  titleText: string;
  subtitleText: string;
}

const TitleAuthorization = ({
  titleText,
  subtitleText,
}: ITitleAuthorization) => {
  const { titleColor, subtitleColor } =
    useTheme().colors.myColors.titleAuthorizationColors;

  return (
    <View>
      <Text style={[styles.text, styles.fs32, { color: titleColor }]}>
        {titleText}
      </Text>
      <Text style={[styles.text, styles.fs16, { color: subtitleColor }]}>
        {subtitleText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Outfit-Regular',
  },
  fs32: {
    fontSize: 32,
  },
  fs16: {
    fontSize: 16,
  },
});

export default TitleAuthorization;
