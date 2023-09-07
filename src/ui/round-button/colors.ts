import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';

export const DEFAULT_ROUND_BUTTON_COLORS = false
  ? {
      defaultColor: DARK_THEME.primaryDefault,
      defaultIconColor: DARK_THEME.color7,
      pressColor: DARK_THEME.color7,
      pressIconColor: DARK_THEME.primaryDefault,
      disabledColor: DARK_THEME.color4,
      disabledIconColor: DARK_THEME.color2,
    }
  : {
      defaultColor: LIGHT_THEME.primaryDefault,
      defaultIconColor: LIGHT_THEME.color7,
      pressColor: LIGHT_THEME.primaryPressed,
      pressIconColor: LIGHT_THEME.color7,
      disabledColor: LIGHT_THEME.color3,
      disabledIconColor: LIGHT_THEME.color5,
    };

export const CLOSE_ROUND_BUTTON_COLORS = false
  ? {
      defaultColor: DARK_THEME.color5,
      defaultIconColor: DARK_THEME.color7,
      pressColor: DARK_THEME.primaryDefault,
      pressIconColor: DARK_THEME.color7,
      disabledColor: DARK_THEME.color4,
      disabledIconColor: DARK_THEME.color7,
    }
  : {
      defaultColor: DARK_THEME.color5,
      defaultIconColor: LIGHT_THEME.color2,
      pressColor: LIGHT_THEME.primaryDefault,
      pressIconColor: LIGHT_THEME.color1,
      disabledColor: LIGHT_THEME.color2,
      disabledIconColor: LIGHT_THEME.color3,
    };
