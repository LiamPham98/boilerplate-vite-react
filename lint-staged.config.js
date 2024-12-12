export default {
  "*.{js,jsx,ts,tsx}": ["pnpm format"],
  "**/*.ts?(x)": () => "pnpm run check-types",
};
