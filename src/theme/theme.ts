import { DefaultTheme } from 'styled-components';

import { COLORS } from './colors';

export const theme: DefaultTheme = {
  typography: {
    fontFamily: {
      primary: 'Nunito Sans',
      secondary: 'Roboto',
    },
    fontWeight: {
      200: '200',
      300: '300',
      400: '400',
      600: '600',
    },
  },
  palette: {
    primary: COLORS.green,
    secondary: COLORS.violet,
    grey: COLORS.grey,
    error: COLORS.error,
  },
  shape: {
    borderRadius: {
      s: '4px',
      m: '6px',
      l: '10px',
    },
  },
  transitionDuration: {
    normal: '0.3s',
  },
  spacing: (value = 1) => `${value * 8}px`,
};
