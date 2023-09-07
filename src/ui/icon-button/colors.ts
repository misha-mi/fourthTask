import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';

export const ICON_BUTTON_COLORS = false
  ? {
      defaultColor: DARK_THEME.color1,
      pressedColor: DARK_THEME.primaryDefault,
      disabledColor: DARK_THEME.color4,
    }
  : {
      defaultColor: LIGHT_THEME.color1,
      pressedColor: LIGHT_THEME.primaryPressed,
      disabledColor: LIGHT_THEME.color3,
    };
