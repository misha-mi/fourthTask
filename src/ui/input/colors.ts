import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';

export const INPUT_COLORS = true
  ? {
      labelColor: DARK_THEME.color3,
      initialColor: DARK_THEME.color4,
      typingColor: DARK_THEME.color1,
      disabledColor: DARK_THEME.color5,
      successColor: DARK_THEME.primaryDefault,
      errorColor: DARK_THEME.errorColor,
      caretColor: DARK_THEME.primaryPressed,
    }
  : {
      labelColor: LIGHT_THEME.color3,
      initialColor: LIGHT_THEME.color3,
      typingColor: LIGHT_THEME.color1,
      disabledColor: LIGHT_THEME.color5,
      successColor: LIGHT_THEME.primaryDefault,
      errorColor: LIGHT_THEME.errorColor,
      caretColor: DARK_THEME.primaryPressed,
    };
