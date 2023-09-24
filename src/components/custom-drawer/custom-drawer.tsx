import {
  View,
  Text,
  Appearance,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import TextWithIconButton from '../../ui/text-with-icon-button/text-with-icon-button';
import UserSVG from '../../assets/svg/user-svg';
import LogOutSVG from '../../assets/svg/log-out-svg';
import MoonSVG from '../../assets/svg/moon-svg';
import { ReactElement } from 'react';
import SunSVG from '../../assets/svg/sun-svg';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import ProfileImg from '../../ui/profile-img/profile-img';
import { useTheme } from '@react-navigation/native';
import { setTheme, setToken } from '../../storage/storage';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../apollo/service/get-user';
import client from '../../apollo/client';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const {
    data: {
      userMe: { firstName, avatarUrl, lastName },
    },
  } = useQuery(GET_USER);

  const colorScheme = useColorScheme();

  const { color1 } = useTheme().colors.defaultColors;

  const name = firstName + ' ' + lastName || 'Anonym';

  let textChangeColorTheme: string;

  let svgChangeColorTheme: (color: string) => ReactElement;

  if (colorScheme === 'dark') {
    textChangeColorTheme = 'Night theme';
    svgChangeColorTheme = color => <MoonSVG color={color} />;
  } else {
    textChangeColorTheme = 'Light theme';
    svgChangeColorTheme = color => <SunSVG color={color} />;
  }

  const handlerChangeColorTheme = () => {
    const theme = Appearance.getColorScheme();
    if (theme === 'dark') {
      Appearance.setColorScheme('light');
      setTheme('light');
    } else {
      Appearance.setColorScheme('dark');
      setTheme('dark');
    }
  };

  const handlerLogOut = async () => {
    setToken('');
    client.resetStore();
  };

  return (
    <View style={styles.wrapper}>
      <ProfileImg size="medium" userImg={avatarUrl} />
      <Text style={{ ...styles.name, color: color1 }}>{name}</Text>

      <View style={styles.mt60}>
        <TextWithIconButton
          text="Profile"
          onRenderSVG={color => <UserSVG size="small" color={color} />}
          onClick={() => props.navigation.navigate('Profile')}
        />
      </View>

      <View style={styles.mt32}>
        <TextWithIconButton
          text="Exit"
          onRenderSVG={color => <LogOutSVG color={color} />}
          onClick={handlerLogOut}
        />
      </View>

      <View style={styles.positionBottom}>
        <TextWithIconButton
          text={textChangeColorTheme}
          onRenderSVG={svgChangeColorTheme}
          onClick={handlerChangeColorTheme}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 36,
    flexDirection: 'column',
    position: 'relative',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Outfit-SemiBold',
    marginTop: 12,
  },
  mt60: {
    marginTop: 60,
  },
  mt32: {
    marginTop: 32,
  },
  positionBottom: {
    position: 'absolute',
    bottom: 36,
    left: 36,
  },
});

export default CustomDrawer;
