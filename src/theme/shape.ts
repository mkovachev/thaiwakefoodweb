interface AugmentedShape {
  borderRadiusBox: number | string;
  borderRadiusCard: number | string;
  borderRadiusButton: number | string;
}

type AugmentedShapeOptions = Partial<AugmentedShape>;

declare module '@mui/material/styles' {
  interface Theme {
    shape?: AugmentedShapeOptions,
  }
  interface ThemeOptions {
    shape: AugmentedShape;
  }
}

export const shape = {
  borderRadiusBox: '1rem',
  borderRadiusCard: '1.25rem',
  borderRadiusButton: '2rem',
};
