import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const CloseSVG = ({ color }: { color: string }) => (
  <Svg width={24} height={24} fill="none">
    <G clipPath="url(#a)">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4.5 19.5 15-15m-15 0 15 15"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CloseSVG;
