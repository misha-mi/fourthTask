import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const PlusSVG = ({ color }: { color: string }) => (
  <Svg width={24} height={24} fill="none">
    <G clipPath="url(#a)">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v18m9-9H3"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PlusSVG;
