import { Pressable, StyleSheet, Text, View } from 'react-native';
import HomeSVG from '../../assets/svg/home-svg';
import BookmarkSVG from '../../assets/svg/bookmark-svg';
import PhotoSVG from '../../assets/svg/photo-svg';
import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';
import { useState } from 'react';

const { color1, color4, primaryDefault } = true ? LIGHT_THEME : DARK_THEME;

const BUTTONS = [
  {
    text: 'Main',
    onRenderSVG: (color: string) => <HomeSVG color={color} />,
  },
  {
    text: 'Favorites',
    onRenderSVG: (color: string) => <BookmarkSVG color={color} />,
  },
  {
    text: 'My posts',
    onRenderSVG: (color: string) => <PhotoSVG color={color} />,
  },
];

const Tapbar = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <View style={styles.wrapper}>
      {BUTTONS.map(({ text, onRenderSVG }, id) => {
        const color = id === activeButton ? primaryDefault : color4;
        return (
          <Pressable
            key={id}
            style={styles.pressabel}
            onTouchEnd={() => setActiveButton(id)}>
            <>
              {onRenderSVG(color)}
              <Text style={[styles.text, { color: color }]}>{text}</Text>
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
    height: 100,
    backgroundColor: color1,
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
