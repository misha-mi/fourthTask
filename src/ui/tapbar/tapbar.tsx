import { Pressable, StyleSheet, Text, View } from 'react-native';
import HomeSVG from '../../assets/svg/home-svg';
import BookmarkSVG from '../../assets/svg/bookmark-svg';
import PhotoSVG from '../../assets/svg/photo-svg';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';

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

const Tapbar = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState(0);

  const { backgroundColor, defaultColor, activeColor } =
    useTheme().colors.tapbarColors;

  const handlerClick = (path: string, id: number) => {
    setActiveButton(id);
    navigation.navigate(path);
  };

  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: backgroundColor,
      }}>
      {BUTTONS.map(({ text, onRenderSVG }, id) => {
        const color = id === activeButton ? activeColor : defaultColor;
        return (
          <Pressable
            key={id}
            style={styles.pressabel}
            onTouchEnd={() => handlerClick(text, id)}>
            <>
              {onRenderSVG(color)}
              <Text style={{ ...styles.text, color: color }}>{text}</Text>
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
