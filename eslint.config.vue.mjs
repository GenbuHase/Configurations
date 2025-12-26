// @ts-check

import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/recommended"],

	{
		files: ["**/*.vue"],

		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},

	prettier
];
