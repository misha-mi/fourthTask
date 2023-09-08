import { Image, View, StyleSheet } from 'react-native';
import UserSVG from '../../assets/svg/user-svg';
import { IProfileImg } from './type';
import { useTheme } from '@react-navigation/native';

const ProfileImg = ({ userImg, size = 'large' }: IProfileImg) => {
  const theme = useTheme();
  const { backgroundColor, SVGColor } = theme.colors.profileImgColors;

  return (
    <View
      style={{
        ...style.wrapper,
        ...style[size],
        backgroundColor: backgroundColor,
      }}>
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
