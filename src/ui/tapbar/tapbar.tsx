import { Pressable, StyleSheet, Text, View } from 'react-native';
import HomeSVG from '../../assets/svg/home-svg';
import BookmarkSVG from '../../assets/svg/bookmark-svg';
import PhotoSVG from '../../assets/svg/photo-svg';
import { useTheme } from '@react-navigation/native';
import { ITapbar, TButtons } from './type';

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

const Tapbar = ({ filter, setFilter }: ITapbar) => {
  const { backgroundColor, defaultColor, activeColor } =
    useTheme().colors.tapbarColors;

  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: backgroundColor,
      }}>
      {BUTTONS.map(({ text, onRenderSVG }, id) => {
        const color =
          filter === text.toLowerCase() ? activeColor : defaultColor;
        return (
          <Pressable
            key={id}
            style={styles.pressabel}
            onTouchEnd={() => setFilter(text)}>
            <>
              {onRenderSVG(color)}
              <Text style={{ ...styles.text, color: color }}>
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
