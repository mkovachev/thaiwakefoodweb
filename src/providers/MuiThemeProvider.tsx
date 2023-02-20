import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from '../ui/theme';


export interface MuiThemeProviderProps {
  children: ReactNode;
}

export const MuiThemeProvider = ({ children }: MuiThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
