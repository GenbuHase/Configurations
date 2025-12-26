// @ts-check

import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ["**/*.{ts,mts,cts,tsx}"],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    prettier,
]
