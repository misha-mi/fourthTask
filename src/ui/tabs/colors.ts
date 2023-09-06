import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';

export const TABS_COLORS = false
  ? {
      defaultTabColor: DARK_THEME.color5,
      activeTabColor: DARK_THEME.primaryDefault,
      defaultTextColor: DARK_THEME.color1,
      activeTextColor: DARK_THEME.color7,
    }
  : {
      defaultTabColor: LIGHT_THEME.color6,
      activeTabColor: LIGHT_THEME.primaryPressed,
      defaultTextColor: LIGHT_THEME.color1,
      activeTextColor: LIGHT_THEME.color7,
    };
