// @ts-check

import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
    eslint.configs.recommended,

    {
        files: ["**/*.{js,mjs,cjs}"],
        
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    prettier,
];
