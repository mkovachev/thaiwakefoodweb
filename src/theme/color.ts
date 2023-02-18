import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    color: {
      black: string;
      white: string;
      grey: string;
      yellow: string;
      red: string;
    }
  }
  interface ThemeOptions {
    color: {
      black: string;
      white: string;
      grey: string;
      yellow: string;
      red: string;
    }
  }
}

export const color: ThemeOptions['color'] = {
  black: '#262D2F',
  white: '#FFFFFF',
  grey: '#D7D7D7',
  yellow: '#FFC529',
  red: '#FE724D'
}