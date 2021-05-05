import { purple, neutral, yellow, green, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
    primaryColor: purple[300],
    disabledColor: purple[100],
    primaryHoverColor: purple[500],
    primaryBorderColor: purple[500],
    primaryActiveColor: purple[200],
    textColorOnPrimary: neutral[100],
    textColorOnTertiary: purple[200],
    textColorOnSecondary: purple[500],
    disabledTextColor: purple[400],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    primaryFont: primaryFont,
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    textFieldBackground: neutral[200],
    textFieldLabelColor: neutral[500],
    status: {
        warningColor: yellow[200],
        warningColorHover: yellow[300],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    },
};

export const darkTheme = {
    primaryColor: neutral[100],
    primaryHoverColor: neutral[200],
    primaryActiveColor: neutral[300],
    textColorOnPrimary: purple[300],
    textColor: purple[300],
    textColorInverted: neutral[100],
    primaryFont: primaryFont,
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    formElementBackground: purple[100],
    textOnFormElementBackground: neutral[100],
    textFieldBackground: neutral[200],
    textFieldLabelColor: neutral[100],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
};
