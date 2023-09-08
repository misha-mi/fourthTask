import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { TColor } from '../../types';

const BookmarkSVG = ({ color }: TColor) => (
  <Svg width={24} height={24} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BookmarkSVG;
