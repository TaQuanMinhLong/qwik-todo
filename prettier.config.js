/** @type {import('prettier').Config} */
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: [require("prettier-plugin-tailwindcss")],
  printWidth: 100,
};
