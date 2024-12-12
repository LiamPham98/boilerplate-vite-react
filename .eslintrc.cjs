const a11yOff = Object.keys(require("eslint-plugin-jsx-a11y").rules).reduce(
  (acc, rule) => {
    acc[`jsx-a11y/${rule}`] = "off";
    return acc;
  },
  {},
);

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "unused-imports",
    "tailwindcss",
    "simple-import-sort",
    "react-refresh",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        bracketSpacing: true,
        htmlWhitespaceSensitivity: "css",
        insertPragma: false,
        jsxBracketSameLine: false,
        printWidth: 80,
        proseWrap: "never",
        quoteProps: "as-needed",
        requirePragma: false,
        semi: true,
        tabWidth: 2,
        trailingComma: "all",
        useTabs: false,
        endOfLine: "auto",
      },
    ], // Avoid conflict rule between Prettier and Airbnb Eslint
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "off",
    "react/prop-types": "off",
    "react/button-has-type": "off", // Avoid conflict rule between Airbnb Eslint and TypeScript
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",

    "import/extensions": "off", // Avoid missing file extension errors, TypeScript already provides a similar feature
    "react/function-component-definition": "off", // Disable Airbnb's specific function type
    "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    "react/require-default-props": "off", // Allow non-defined react props as undefined
    "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
    "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
    "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
    "tailwindcss/no-custom-classname": "off", // Allow custom classnames
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ], // Overrides Airbnb configuration and enable no-restricted-syntax
    "import/prefer-default-export": "off", // Named export is easier to refactor automatically
    "import/no-extraneous-dependencies": ["off"],
    "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
    "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
    "import/order": "off", // Avoid conflict rule between `eslint-plugin-import` and `eslint-plugin-simple-import-sort`
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-no-useless-fragment": "off",
    "no-restricted-globals": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "snake_case", "UPPER_CASE", "PascalCase"],
      },
    ],
    ...a11yOff,
  },
};
