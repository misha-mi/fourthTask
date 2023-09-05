import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';

export const COPY_COLORS = false
  ? {
      defaultBackgroundColor: DARK_THEME.color5,
      pressedBackgroundColor: DARK_THEME.primaryDefault,
      disabledBackgroundColor: DARK_THEME.color4,
      defaultTextColor: DARK_THEME.color1,
      pressedTextColor: DARK_THEME.color5,
      disabledTextColor: DARK_THEME.color2,
    }
  : {
      defaultBackgroundColor: LIGHT_THEME.color5,
      pressedBackgroundColor: LIGHT_THEME.primaryDefault,
      disabledBackgroundColor: LIGHT_THEME.color5,
      defaultTextColor: LIGHT_THEME.color1,
      pressedTextColor: LIGHT_THEME.color1,
      disabledTextColor: LIGHT_THEME.color3,
    };
