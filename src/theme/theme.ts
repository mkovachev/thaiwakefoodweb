import "@fontsource/poppins";
import { createTheme } from '@mui/material/styles';
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { shape } from "./shape";
import { typography } from "./typography";


export const theme = createTheme({
  colors,
  shape,
  typography,
  breakpoints
});
