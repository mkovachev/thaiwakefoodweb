import { BreakpointsOptions } from "@mui/material";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mobile: true
  }
}

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    mobile: 412,
  }
}