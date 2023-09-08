import { Pressable, StyleSheet, View } from 'react-native';
import { ReactElement, useState } from 'react';
import CheckSVG from '../../assets/svg/check-svg';
import { useTheme } from '@react-navigation/native';
import { ICheckInput } from './type';

const CheckInput = ({ type = 'square' }: ICheckInput) => {
  const theme = useTheme();
  const { backgroundColor, checkedColor, borderColor } =
    theme.colors.checkInputColors;

  const [isChecked, setIsChecked] = useState(false);

  let iconChecked: ReactElement;

  switch (type) {
    case 'round':
      iconChecked = (
        <View
          style={{
            ...styles.view,
            backgroundColor: checkedColor,
          }}
        />
      );
      break;
    case 'square':
      iconChecked = <CheckSVG color={checkedColor} />;
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
          backgroundColor: isChecked ? backgroundColor : 'transparent',
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
  },
});

export default CheckInput;
