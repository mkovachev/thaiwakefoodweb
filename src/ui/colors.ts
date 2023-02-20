import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      black: string
      white: string
      grey: string
      yellow: string
      red: string
    }
  }
  interface ThemeOptions {
    colors: {
      black: string
      white: string
      grey: string
      yellow: string
      red: string
    }
  }
}

export const colors: ThemeOptions['colors'] = {
  black: '#262D2F',
  white: '#FFFFFF',
  grey: '#D7D7D7',
  yellow: '#FFC529',
  red: '#FE724D'
}