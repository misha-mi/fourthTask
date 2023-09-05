
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const CheckCircleSVG = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#B8DE64"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.1}
        d="M6.5 9.313 8.188 11 11 7.062m4.5 1.688a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CheckCircleSVG
