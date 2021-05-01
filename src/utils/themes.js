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
