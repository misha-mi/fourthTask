import {DARK_THEME, LIGHT_THEME} from '../../assets/colors';

export const LARGE_BUTTON_COLORS = false
  ? {
      buttonColor: DARK_THEME.color5,
      pressedButtonColor: DARK_THEME.primaryDefault,
      disabledButtonColor: DARK_THEME.color5,
      textColor: DARK_THEME.primaryDefault,
      pressedTextColor: DARK_THEME.color7,
      disabledTextColor: DARK_THEME.color4,
    }
  : {
      buttonColor: LIGHT_THEME.primaryDefault,
      pressedButtonColor: LIGHT_THEME.primaryPressed,
      disabledButtonColor: LIGHT_THEME.color5,
      textColor: LIGHT_THEME.color7,
      pressedTextColor: LIGHT_THEME.color7,
      disabledTextColor: LIGHT_THEME.color3,
    };

export const MEDIUM_BUTTON_COLORS = false
  ? {
      buttonColor: DARK_THEME.color7,
      pressedButtonColor: DARK_THEME.primaryDefault,
      disabledButtonColor: DARK_THEME.color5,
      textColor: DARK_THEME.primaryDefault,
      pressedTextColor: DARK_THEME.color7,
      disabledTextColor: DARK_THEME.color4,
    }
  : {
      buttonColor: LIGHT_THEME.color7,
      pressedButtonColor: LIGHT_THEME.primaryDefault,
      disabledButtonColor: LIGHT_THEME.color5,
      textColor: LIGHT_THEME.primaryDefault,
      pressedTextColor: LIGHT_THEME.color7,
      disabledTextColor: LIGHT_THEME.color3,
    };
