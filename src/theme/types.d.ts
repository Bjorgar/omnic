import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        40: string;
        90: string;
      };
      secondary: {
        50: string;
      }
      grey: {
        0: string;
        40: string;
        60: string;
        90: string;
      };
      error: string;
    };
    typography: {
      fontFamily: {
        primary: string;
        secondary: string;
      };
      fontWeight: {
        200: string;
        300: string;
        400: string;
        600: string;
      }
    };
    shape: {
      borderRadius: {
        s: string;
        m: string
        l: string;
      };
    };
    transitionDuration: {
      normal: string;
    };
    breakpoints: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    spacing: (value?: number) => string;
  }
}
