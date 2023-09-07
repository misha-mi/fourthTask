import { Image, View, StyleSheet } from 'react-native';
import { DARK_THEME } from '../../assets/colors';
import UserSVG from '../../assets/svg/user-svg';
import { IProfileImg } from './type';
import { PROFILE_COLORS } from './colors';

const { backgroundColor, SVGColor } = PROFILE_COLORS;

const ProfileImg = ({ userImg, size = 'large' }: IProfileImg) => {
  return (
    <View style={[style.wrapper, style[size]]}>
      {userImg ? (
        <Image
          source={require('../../assets/img/user.png')}
          resizeMode="cover"
          style={style[size]}
        />
      ) : (
        <UserSVG size={size} color={SVGColor} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  large: {
    width: 160,
    height: 160,
  },
  medium: {
    width: 80,
    height: 80,
  },
  small: {
    width: 40,
    height: 40,
  },
  verySmall: {
    width: 24,
    height: 24,
  },
});

export default ProfileImg;
