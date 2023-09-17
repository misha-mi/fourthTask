import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import HomeSVG from '../../assets/svg/home-svg';
import BookmarkSVG from '../../assets/svg/bookmark-svg';
import PhotoSVG from '../../assets/svg/photo-svg';
import { useTheme } from '@react-navigation/native';
import { TButtons } from './type';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const BUTTONS: TButtons = [
  {
    text: 'main',
    onRenderSVG: (color: string) => <HomeSVG color={color} />,
  },
  {
    text: 'favorites',
    onRenderSVG: (color: string) => <BookmarkSVG color={color} />,
  },
  {
    text: 'my posts',
    onRenderSVG: (color: string) => <PhotoSVG color={color} />,
  },
];

const Tapbar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { backgroundColor, defaultColor, activeColor } =
    useTheme().colors.tapbarColors;

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        ...styles.wrapper,
      }}>
      {state.routes.map((route, index) => {
        const { onRenderSVG, text } = BUTTONS[index];

        const isFocused = state.index === index;
        const color = isFocused ? activeColor : defaultColor;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { name: route.name, merge: true });
          }
        };

        return (
          <Pressable key={index} style={styles.pressabel} onPress={onPress}>
            <>
              {onRenderSVG(color)}
              <Text
                style={{
                  ...styles.text,
                  color: color,
                }}>
                {text.slice(0, 1).toUpperCase() + text.slice(1)}
              </Text>
            </>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 'auto',
    height: 80,
    flexDirection: 'row',
    padding: 40,
    paddingTop: 20,
  },
  pressabel: {
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },
  text: {
    fontFamily: 'Outfit-Medium',
    fontSize: 12,
  },
});

export default Tapbar;
