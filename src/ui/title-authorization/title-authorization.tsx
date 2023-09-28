import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { stylesText } from '../../global-styles';

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
      <Text style={[stylesText.outfitRegular32, { color: titleColor }]}>
        {titleText}
      </Text>
      <Text style={[stylesText.outfitRegular16, { color: subtitleColor }]}>
        {subtitleText}
      </Text>
    </View>
  );
};

export default TitleAuthorization;
