import { StyleSheet, View, Text } from 'react-native';
import IconButton from '../icon-button/icon-button';
import ArrowSVG from '../../assets/svg/arrow-svg';
import { useTheme } from '@react-navigation/native';
import { IHeaderProps } from './type';
import { stylesText } from '../../global-styles';

const Header = ({ title, onBack }: IHeaderProps) => {
  const { color1 } = useTheme().colors.myColors.defaultColors;

  return (
    <View style={styles.header}>
      <View style={styles.posAbsolute}>
        <IconButton
          onRenderSVG={(color: string) => <ArrowSVG color={color} />}
          onClick={onBack}
        />
      </View>
      <Text style={{ ...stylesText.outfitSemiBold18, color: color1 }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  posAbsolute: {
    position: 'absolute',
    left: 16,
    top: 20,
  },
});

export default Header;
