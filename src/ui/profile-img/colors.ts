import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';

export const PROFILE_COLORS = false
  ? { backgroundColor: DARK_THEME.color4, SVGColor: DARK_THEME.color6 }
  : { backgroundColor: LIGHT_THEME.color4, SVGColor: LIGHT_THEME.color3 };
