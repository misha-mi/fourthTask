import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { stylesText } from '../../global-styles';
import { ITitleAuthorizationProps } from './type';

const TitleAuthorization = ({
  titleText,
  subtitleText,
}: ITitleAuthorizationProps) => {
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
