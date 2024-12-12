// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]

/** @type {import('postcss-load-config').Config} */
export const plugins = {
  tailwindcss: {},
  autoprefixer: {},
  // eslint-disable-next-line no-undef
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};
