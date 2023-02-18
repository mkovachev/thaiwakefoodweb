import "@fontsource/poppins";
import { createTheme } from '@mui/material/styles';
import { color } from "./color";
import { shape } from "./shape";
import { typography } from "./typography";


export const theme = createTheme({
  color,
  shape,
  typography,
});
