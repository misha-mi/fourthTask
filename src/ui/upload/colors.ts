import {DARK_THEME, LIGHT_THEME} from '../../assets/colors';

export const UPLOAD_COLORS = true
  ? {
      backgroundColor: DARK_THEME.color4,
      borderColor: DARK_THEME.color4,
      textColor: DARK_THEME.color2,
      cloudColor: DARK_THEME.primaryDefault,
    }
  : {
      backgroundColor: LIGHT_THEME.color7,
      borderColor: LIGHT_THEME.primaryDefault,
      textColor: LIGHT_THEME.color1,
      cloudColor: LIGHT_THEME.primaryDefault,
    };
