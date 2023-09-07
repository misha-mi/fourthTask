import { Pressable, StyleSheet, View } from 'react-native';
import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';
import { ReactElement, useState } from 'react';
import CheckSVG from '../../assets/svg/check-svg';

const { color5, primaryDefault } = false ? DARK_THEME : LIGHT_THEME;
const borderColor = false ? DARK_THEME.color4 : LIGHT_THEME.color2;

const CheckInput = ({ type = 'square' }: { type?: 'round' | 'square' }) => {
  const [isChecked, setIsChecked] = useState(false);

  let iconChecked: ReactElement;

  switch (type) {
    case 'round':
      iconChecked = <View style={styles.view} />;
      break;
    case 'square':
      iconChecked = <CheckSVG color={primaryDefault} />;
      break;
  }

  const handlerCheck = () => {
    setIsChecked(state => !state);
  };

  return (
    <Pressable
      style={[
        styles.wrapper,
        {
          backgroundColor: isChecked ? color5 : 'transparent',
          borderColor: !isChecked ? borderColor : 'transparent',
          borderRadius: type === 'round' ? 20 : 4,
        },
      ]}
      onTouchEnd={handlerCheck}>
      {isChecked ? iconChecked : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 20,
    height: 20,
    borderWidth: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: primaryDefault,
  },
});

export default CheckInput;
