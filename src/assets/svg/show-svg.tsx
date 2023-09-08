import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
const ShowSVG = ({ color }: { color: string }) => (
  <Svg width={20} height={20} fill="none">
    <G clipPath="url(#a)">
      <G fill={color} clipPath="url(#b)">
        <Path d="M10.445 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <Path
          fillRule="evenodd"
          d="M1.11 10.59a1.651 1.651 0 0 1 0-1.186A10.003 10.003 0 0 1 10.444 3c4.257 0 7.893 2.66 9.336 6.41a1.65 1.65 0 0 1 0 1.186A10.003 10.003 0 0 1 10.446 17c-4.257 0-7.893-2.66-9.336-6.41ZM14.446 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          clipRule="evenodd"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={20} height={20} fill={color} rx={10} />
      </ClipPath>
      <ClipPath id="b">
        <Path fill={color} d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ShowSVG;
