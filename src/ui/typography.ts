import { ExtendedTypographyOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { colors } from './colors';

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primaryNumber: true;
    secondaryNumber: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    variant: {
      primaryNumber: string;
      secondaryNumber: string;
    }
  }
  interface ExtendedTypographyOptions extends TypographyOptions {
    primaryNumber: React.CSSProperties;
    secondaryNumber: React.CSSProperties;
  }
}

export const typography: ExtendedTypographyOptions = {
  fontSize: 16,
  fontFamily: 'Poppins',
  body1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.125rem',
    color: colors.black,
  },
  body2: {
    fontWeight: 400,
    fontSize: '.875rem',
    lineHeight: '1.125rem',
    color: colors.black,
  },
  h1: {
    fontWeight: 500,
    fontSize: '2.5rem',
    lineHeight: '3.75rem',
    color: colors.black,
  },
  h2: {
    fontWeight: 500,
    fontSize: '2rem',
    lineHeight: '3rem',
    color: colors.black,
  },
  h3: {
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: '2.25rem',
    color: colors.black,
  },
  h4: {
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    color: colors.black,
  },
  h5: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: colors.black,
  },
  h6: {
    fontWeight: 400,
    fontSize: '.875rem',
    lineHeight: '1.125rem',
    color: colors.black,
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    color: colors.grey,
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '.875rem',
    lineHeight: '1.125rem',
    color: colors.grey,
  },
  primaryNumber: {
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: '2rem',
    color: colors.black,
  },
  secondaryNumber: {
    fontWeight: 500,
    fontSize: '1.75rem',
    lineHeight: '2.625rem',
    color: colors.black,
  },
};
