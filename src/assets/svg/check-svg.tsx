import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
import { Styles } from 'react-native-svg/lib/typescript/xml';
const CheckSVG = ({ color }: { color: string }) => (
  <Svg width={16} height={16} fill="none" viewBox="0 0 24 24">
    <G clipPath="url(#a)">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 13.5 6.75 6.75L21 4.5"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CheckSVG;
