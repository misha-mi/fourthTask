import { StyleSheet, View, Text } from 'react-native';
import IconButton from '../icon-button/icon-button';
import ArrowSVG from '../../assets/svg/arrow-svg';
import { useTheme } from '@react-navigation/native';
import { IHeader } from './type';

const Header = ({ title, onBack }: IHeader) => {
  const { color1 } = useTheme().colors.myColors.defaultColors;

  return (
    <View style={styles.header}>
      <View style={styles.posAbsolute}>
        <IconButton
          onRenderSVG={(color: string) => <ArrowSVG color={color} />}
          onClick={onBack}
        />
      </View>
      <Text style={{ color: color1, ...styles.title }}>{title}</Text>
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
  title: {
    fontSize: 18,
    fontFamily: 'Outfit-SemiBold',
  },
});

export default Header;
