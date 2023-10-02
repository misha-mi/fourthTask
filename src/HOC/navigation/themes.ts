import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const CustomDarkTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: DARK_THEME.color7,
    myColors: {
      profileImgColors: {
        backgroundColor: DARK_THEME.color4,
        SVGColor: DARK_THEME.color6,
      },
      checkInputColors: {
        backgroundColor: DARK_THEME.color5,
        checkedColor: DARK_THEME.primaryPressed,
        borderColor: DARK_THEME.color4,
      },
      copyInputColors: {
        defaultBackgroundColor: DARK_THEME.color5,
        pressedBackgroundColor: DARK_THEME.primaryPressed,
        disabledBackgroundColor: DARK_THEME.color4,
        defaultTextColor: DARK_THEME.color1,
        pressedTextColor: DARK_THEME.color5,
        disabledTextColor: DARK_THEME.color2,
      },
      largeButtonColors: {
        buttonColor: DARK_THEME.color5,
        pressedButtonColor: DARK_THEME.primaryPressed,
        disabledButtonColor: DARK_THEME.color5,
        textColor: DARK_THEME.primaryPressed,
        pressedTextColor: DARK_THEME.color7,
        disabledTextColor: DARK_THEME.color4,
        cancelColor: DARK_THEME.errorColor,
      },
      mediumButtonColors: {
        buttonColor: DARK_THEME.color7,
        pressedButtonColor: DARK_THEME.primaryPressed,
        disabledButtonColor: DARK_THEME.color5,
        textColor: DARK_THEME.primaryPressed,
        pressedTextColor: DARK_THEME.color7,
        disabledTextColor: DARK_THEME.color4,
        cancelColor: DARK_THEME.errorColor,
      },
      deleteButtonColors: {
        backgroundColor: DARK_THEME.errorColor,
        textColor: DARK_THEME.color1,
      },
      iconButtonColors: {
        defaultColor: DARK_THEME.color1,
        pressedColor: DARK_THEME.primaryPressed,
        disabledColor: DARK_THEME.color4,
      },
      inputColors: {
        labelColor: DARK_THEME.color3,
        initialColor: DARK_THEME.color4,
        typingColor: DARK_THEME.color1,
        disabledColor: DARK_THEME.color5,
        successColor: DARK_THEME.primaryPressed,
        errorColor: DARK_THEME.errorColor,
        caretColor: DARK_THEME.primaryDefault,
      },
      defaultRoundButtonColors: {
        defaultColor: DARK_THEME.primaryPressed,
        defaultIconColor: DARK_THEME.color7,
        pressColor: DARK_THEME.color7,
        pressIconColor: DARK_THEME.primaryPressed,
        disabledColor: DARK_THEME.color4,
        disabledIconColor: DARK_THEME.color2,
      },
      closeRoundButtonColors: {
        defaultColor: DARK_THEME.color5,
        defaultIconColor: DARK_THEME.color7,
        pressColor: DARK_THEME.primaryPressed,
        pressIconColor: DARK_THEME.color7,
        disabledColor: DARK_THEME.color4,
        disabledIconColor: DARK_THEME.color7,
      },
      tabsColors: {
        defaultTabColor: DARK_THEME.color5,
        activeTabColor: DARK_THEME.primaryPressed,
        defaultTextColor: DARK_THEME.color1,
        activeTextColor: DARK_THEME.color7,
      },
      tapBarColors: {
        backgroundColor: DARK_THEME.color7,
        defaultColor: DARK_THEME.color4,
        activeColor: DARK_THEME.primaryPressed,
      },
      textButtonColors: {
        defaultColor: DARK_THEME.primaryPressed,
        pressedColor: DARK_THEME.primaryDefault,
        disabledColor: DARK_THEME.color4,
      },
      textWithIconButtonColors: {
        defaultColor: DARK_THEME.color1,
        pressedColor: DARK_THEME.primaryPressed,
        disabledColor: DARK_THEME.color4,
      },
      uploadColors: {
        backgroundColor: DARK_THEME.color4,
        borderColor: DARK_THEME.color4,
        textColor: DARK_THEME.color2,
        cloudColor: DARK_THEME.primaryPressed,
      },
      postCardColors: {
        backgroundColor: DARK_THEME.color6,
        titleColor: DARK_THEME.color1,
        textColor: DARK_THEME.color3,
      },
      titleAuthorizationColors: {
        titleColor: DARK_THEME.primaryPressed,
        subtitleColor: DARK_THEME.color1,
      },
      successJoinUsColors: {
        titleColor: DARK_THEME.color7,
        textColor: DARK_THEME.color1,
        backgroundColor: DARK_THEME.primaryPressed,
      },
      noPostsColors: {
        titleColor: DARK_THEME.color7,
        textColor: DARK_THEME.color4,
        backgroundColor: DARK_THEME.primaryPressed,
      },
      defaultColors: DARK_THEME,
    },
  },
};

export const CustomLightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: LIGHT_THEME.color7,
    myColors: {
      profileImgColors: {
        backgroundColor: LIGHT_THEME.color4,
        SVGColor: LIGHT_THEME.color3,
      },
      checkInputColors: {
        backgroundColor: LIGHT_THEME.color5,
        checkedColor: LIGHT_THEME.primaryDefault,
        borderColor: LIGHT_THEME.color2,
      },
      copyInputColors: {
        defaultBackgroundColor: LIGHT_THEME.color5,
        pressedBackgroundColor: LIGHT_THEME.primaryDefault,
        disabledBackgroundColor: LIGHT_THEME.color5,
        defaultTextColor: LIGHT_THEME.color1,
        pressedTextColor: LIGHT_THEME.color1,
        disabledTextColor: LIGHT_THEME.color3,
      },
      largeButtonColors: {
        buttonColor: LIGHT_THEME.primaryDefault,
        pressedButtonColor: LIGHT_THEME.primaryPressed,
        disabledButtonColor: LIGHT_THEME.color5,
        textColor: LIGHT_THEME.color7,
        pressedTextColor: LIGHT_THEME.color7,
        disabledTextColor: LIGHT_THEME.color3,
        cancelColor: LIGHT_THEME.errorColor,
      },
      mediumButtonColors: {
        buttonColor: LIGHT_THEME.color7,
        pressedButtonColor: LIGHT_THEME.primaryDefault,
        disabledButtonColor: LIGHT_THEME.color5,
        textColor: LIGHT_THEME.primaryDefault,
        pressedTextColor: LIGHT_THEME.color7,
        disabledTextColor: LIGHT_THEME.color3,
        cancelColor: LIGHT_THEME.errorColor,
      },
      deleteButtonColors: {
        backgroundColor: LIGHT_THEME.errorColor,
        textColor: LIGHT_THEME.color6,
      },
      iconButtonColors: {
        defaultColor: LIGHT_THEME.color1,
        pressedColor: LIGHT_THEME.primaryPressed,
        disabledColor: LIGHT_THEME.color3,
      },
      inputColors: {
        labelColor: LIGHT_THEME.color3,
        initialColor: LIGHT_THEME.color3,
        typingColor: LIGHT_THEME.color1,
        disabledColor: LIGHT_THEME.color5,
        successColor: LIGHT_THEME.primaryDefault,
        errorColor: LIGHT_THEME.errorColor,
        caretColor: DARK_THEME.primaryPressed,
      },
      defaultRoundButtonColors: {
        defaultColor: LIGHT_THEME.primaryDefault,
        defaultIconColor: LIGHT_THEME.color7,
        pressColor: LIGHT_THEME.primaryPressed,
        pressIconColor: LIGHT_THEME.color7,
        disabledColor: LIGHT_THEME.color3,
        disabledIconColor: LIGHT_THEME.color5,
      },
      closeRoundButtonColors: {
        defaultColor: '#303030',
        defaultIconColor: LIGHT_THEME.color2,
        pressColor: LIGHT_THEME.primaryDefault,
        pressIconColor: LIGHT_THEME.color1,
        disabledColor: LIGHT_THEME.color2,
        disabledIconColor: LIGHT_THEME.color3,
      },
      tabsColors: {
        defaultTabColor: LIGHT_THEME.color6,
        activeTabColor: LIGHT_THEME.primaryPressed,
        defaultTextColor: LIGHT_THEME.color1,
        activeTextColor: LIGHT_THEME.color7,
      },
      tapBarColors: {
        backgroundColor: LIGHT_THEME.color6,
        defaultColor: LIGHT_THEME.color4,
        activeColor: LIGHT_THEME.primaryDefault,
      },
      textButtonColors: {
        defaultColor: LIGHT_THEME.primaryDefault,
        pressedColor: LIGHT_THEME.primaryPressed,
        disabledColor: LIGHT_THEME.color4,
      },
      textWithIconButtonColors: {
        defaultColor: LIGHT_THEME.color1,
        pressedColor: LIGHT_THEME.primaryPressed,
        disabledColor: LIGHT_THEME.color4,
      },
      uploadColors: {
        backgroundColor: LIGHT_THEME.color7,
        borderColor: LIGHT_THEME.primaryDefault,
        textColor: LIGHT_THEME.color1,
        cloudColor: LIGHT_THEME.primaryDefault,
      },
      postCardColors: {
        backgroundColor: LIGHT_THEME.color6,
        titleColor: LIGHT_THEME.color1,
        textColor: LIGHT_THEME.color3,
      },
      titleAuthorizationColors: {
        titleColor: LIGHT_THEME.primaryDefault,
        subtitleColor: LIGHT_THEME.color1,
      },
      successJoinUsColors: {
        titleColor: LIGHT_THEME.color7,
        textColor: LIGHT_THEME.color1,
        backgroundColor: LIGHT_THEME.primaryDefault,
      },
      noPostsColors: {
        titleColor: LIGHT_THEME.color7,
        textColor: LIGHT_THEME.color1,
        backgroundColor: LIGHT_THEME.primaryDefault,
      },
      defaultColors: LIGHT_THEME,
    },
  },
};
