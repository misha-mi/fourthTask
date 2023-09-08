import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const TrashSVG = ({ color }: { color: string }) => (
  <Svg width={33} height={32} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M22.5 5.97v.303a65.101 65.101 0 0 1 5.17.683 1 1 0 1 1-.34 1.971 63.253 63.253 0 0 0-.28-.048l-1.34 17.428A4 4 0 0 1 21.722 30H11.278a4 4 0 0 1-3.988-3.693L5.95 8.879l-.28.048a1 1 0 0 1-.34-1.97 64.84 64.84 0 0 1 5.17-.684v-.302c0-2.086 1.617-3.867 3.754-3.935a70.239 70.239 0 0 1 4.492 0c2.138.068 3.754 1.849 3.754 3.935Zm-8.182-1.935a68.27 68.27 0 0 1 4.364 0c1.007.032 1.818.877 1.818 1.936v.15a65.987 65.987 0 0 0-8 0v-.15c0-1.06.812-1.904 1.818-1.936Zm-.473 7.927a1 1 0 0 0-1.999.076l.462 12a1 1 0 1 0 1.998-.076l-.461-12Zm7.308.076a1 1 0 0 0-1.999-.076l-.461 12a1 1 0 0 0 1.998.076l.462-12Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={color} d="M.5 0h32v32H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TrashSVG;
