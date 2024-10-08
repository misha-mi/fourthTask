
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const UserSVG = (props: SvgProps) => (
  <Svg
    width={92}
    height={92}
    fill="none"
    {...props}
  >
    <G fill="#1B1B1B" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M28.75 23c0-9.527 7.723-17.25 17.25-17.25 9.527 0 17.25 7.723 17.25 17.25 0 9.527-7.723 17.25-17.25 17.25-9.527 0-17.25-7.723-17.25-17.25ZM14.38 77.07C14.676 59.86 28.72 46 46 46c17.281 0 31.325 13.86 31.62 31.072a2.875 2.875 0 0 1-1.675 2.662C66.825 83.92 56.682 86.25 46 86.25c-10.681 0-20.826-2.332-29.946-6.517a2.875 2.875 0 0 1-1.675-2.663Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h92v92H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default UserSVG
