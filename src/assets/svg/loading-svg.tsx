import Svg, { Circle, Path } from 'react-native-svg';
import { TColor } from '../../types';

const LoadingSVG = ({ color }: TColor) => (
  <Svg width={25} height={24} fill="none">
    <Circle
      cx={12.5}
      cy={12}
      r={9}
      stroke="#fff"
      strokeWidth={2}
      opacity={0.5}
    />
    <Path stroke={color} strokeWidth={2} d="M12.5 21a9 9 0 0 1-9-9" />
  </Svg>
);
export default LoadingSVG;
