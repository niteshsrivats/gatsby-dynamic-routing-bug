import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

const primary = `#4A5A98`;
const light = `#8897CF`;
const secondary = `#8EC37F`;

const error = `#DD7575`;
const success = `#8EC37F`;

const textPrimary = `#4B5064`;
const textSecondary = `#4D4D4D`;
const textDisabled = `#00000061`;

const backgroundDefault = `#FFFFFF`;
const backgroundSecondary = `#D8DCE833`;

const black = `#000000`;
const white = `#FFFFFF`;

const theme = responsiveFontSizes(
  createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      primary: {
        contrastText: white,
        light: light,
        main: primary,
      },
      secondary: {
        contrastText: white,
        main: secondary,
      },
      error: {
        main: error,
      },
      success: {
        main: success,
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
        disabled: textDisabled,
      },
      background: {
        default: backgroundDefault,
        secondary: backgroundSecondary,
      },
      common: {
        black: black,
        white: white,
      },
    },
    typography: {
      fontFamily: `-apple-system, "Segoe UI", system-ui, BlinkMacSystemFont,  Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
      h1: {
        fontFamily: `ui-serif, serif`,
        fontSize: '2.5rem',
        fontWeight: '700',
        color: primary,
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: textPrimary,
      },
      h3: {
        fontSize: '1.25rem',
        fontWeight: '400',
        color: primary,
      },
      h4: {
        fontSize: '1rem',
        fontWeight: '600',
        color: primary,
      },
      body1: {
        fontSize: '1rem',
        color: textPrimary,
      },
      button: {
        fontSize: '1rem',
        color: white,
      },
    },
  })
);

export default theme;
