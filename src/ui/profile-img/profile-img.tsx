import { Image, View, StyleSheet } from 'react-native';
import UserSVG from '../../assets/svg/user-svg';
import { IProfileImgProps } from './type';
import { useTheme } from '@react-navigation/native';

const ProfileImg = ({ userImg, size = 'large' }: IProfileImgProps) => {
  const { backgroundColor, SVGColor } =
    useTheme().colors.myColors.profileImgColors;

  return (
    <View
      style={{
        ...style.wrapper,
        ...style[size],
        backgroundColor: backgroundColor,
      }}>
      {userImg ? (
        <Image
          source={{ uri: userImg }}
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
