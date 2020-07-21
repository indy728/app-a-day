export const sizeInts = {
  xs: 450,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mediaSize = {
  xs: `${sizeInts.xs}px`,
  sm: `${sizeInts.sm}px`,
  md: `${sizeInts.md}px`,
  lg: `${sizeInts.lg}px`,
  xl: `${sizeInts.xl}px`,
};

export const device = {
  sm: `(min-width: ${mediaSize.sm})`,
  md: `(min-width: ${mediaSize.md})`,
  lg: `(min-width: ${mediaSize.lg})`,
  xl: `(min-width: ${mediaSize.xl})`,
  maxSm: `(max-width: ${sizeInts.sm - 1}px)`,
  maxMd: `(max-width: ${sizeInts.md - 1}px)`,
  maxLg: `(max-width: ${sizeInts.lg - 1}px)`,
  maxXL: `(max-width: ${sizeInts.xl - 1}px)`,
};
