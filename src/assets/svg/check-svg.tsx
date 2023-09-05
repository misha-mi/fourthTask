import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const CheckSVG = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#B8DE64"
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
)
export default CheckSVG
