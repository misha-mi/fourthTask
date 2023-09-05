
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ShareSVG = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#B8DE64"
        fillRule="evenodd"
        d="M13.125 3.75a2.5 2.5 0 1 1 .688 1.722L6.795 9.37a2.503 2.503 0 0 1 0 1.258l7.018 3.9a2.5 2.5 0 1 1-.607 1.092l-7.019-3.9a2.5 2.5 0 1 1 0-3.444l7.018-3.898a2.502 2.502 0 0 1-.08-.629Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ShareSVG
