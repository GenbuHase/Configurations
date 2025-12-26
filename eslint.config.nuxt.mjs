// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import prettier from "eslint-config-prettier";

/*
 Note: In a real Nuxt project, you should often rely on the module `@nuxt/eslint` to generate the config.
 This file demonstrates how to manually use `@nuxt/eslint-config` with flat config if needed,
 or can be used as a reference for extending the generated config.
*/

export default createConfigForNuxt({
	features: {
		tooling: true,
		stylistic: true
	}
}).prepend(prettier);
