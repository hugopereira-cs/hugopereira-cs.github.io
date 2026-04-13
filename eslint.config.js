import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,

  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    languageOptions: {
      globals: globals.browser,
    },

    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Desativa regras que conflitam com Prettier
  configPrettier,
]);