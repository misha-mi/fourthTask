import { Animated, Easing } from 'react-native';
import LoadingSVG from '../../assets/svg/loading-svg';
import { useEffect } from 'react';
import { TColor } from '../../types';

const Spinner = ({ color }: TColor) => {
  const spinValue = new Animated.Value(0);

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };
  useEffect(() => {
    spin();
  });

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <LoadingSVG color={color} />
    </Animated.View>
  );
};

export default Spinner;
